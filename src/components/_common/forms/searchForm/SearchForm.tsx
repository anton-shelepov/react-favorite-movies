import privateClient from 'api/privateClient'
import { AxiosResponse } from 'axios'
import { MoviesListItem } from 'models/moviesListModels'
import { ChangeEventHandler, FocusEvent, MutableRefObject, useRef, useState } from 'react'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import GlobalSvgSelector from 'utils/svg/GlobalSvgSelector'
import SvgId from 'utils/svg/svgId.enum'
import ResultCard from './ResultCard'
import s from './SearchForm.module.scss'

interface IProps {}

const SearchForm: React.FC<IProps> = () => {
    const [searchResults, setSearchResults] = useState<MoviesListItem[]>([])
    const [showResults, setShowResults] = useState(false)
    const [isSearching, setIsSearching] = useState(false)

    const { handleSubmit, control, reset } = useForm()
    const searchDelay = useRef(setTimeout(() => {}, 0))
    const searchInputElement: MutableRefObject<HTMLInputElement | null> = useRef(null)

    const searchPattern = /^[a-zA-Zа-яА-Я0-9_: ,+.]+$/g

    const onFormSubmit = ({ searchText }: FieldValues) => {
        searchInputElement.current?.blur()
        reset({ searchText: '' })
    }

    const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const searchValue = e.currentTarget.value
        clearTimeout(searchDelay.current)

        if (!searchPattern.test(searchValue)) {
            setSearchResults([])
            return
        }

        searchDelay.current = setTimeout(async () => {
            setIsSearching(true)
            const response: AxiosResponse = await privateClient.get('movie', {
                params: {
                    field: 'name',
                    search: searchValue,
                    isStrict: false,
                    sortField: 'votes.kp',
                    sortType: -1,
                },
            })
            setSearchResults(
                response.data.docs.map((movie: any) => ({
                    id: movie.id,
                    posterURL: movie.poster.previewUrl,
                    title: movie.name,
                    description: movie.description,
                    rating: {
                        kp: movie.rating.kp,
                        imdb: movie.rating.imdb,
                    },
                    type: movie.type,
                    year: movie.year,
                })),
            )
            setIsSearching(false)
        }, 500)
    }

    const onInputFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
        if (e.currentTarget.value === '' && searchResults.length !== 0) {
            setSearchResults([])
        }
        setShowResults(true)
    }

    const onInputBlur = () => {
        setShowResults(false)
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className={s.container} autoComplete='off'>
            <div className={s.search_input__wrapper}>
                <Controller
                    name='searchText'
                    control={control}
                    rules={{ required: true, pattern: searchPattern }}
                    defaultValue=''
                    render={({ field: { onBlur, onChange, ...renderProps } }) => (
                        <input
                            {...renderProps}
                            className={s.search_input}
                            placeholder='Название фильма...'
                            ref={searchInputElement}
                            onBlur={() => {
                                onBlur()
                                onInputBlur()
                            }}
                            onChange={(e) => {
                                onChange(e)
                                onInputChange(e)
                            }}
                            onFocus={onInputFocus}
                        />
                    )}
                />
            </div>

            <button className={s.submit_btn} type='submit'>
                <GlobalSvgSelector id={SvgId.FIND} />
            </button>

            <div className={`${s.search_results} ${showResults ? s.uncollapsed : ''}`}>
                {searchResults.map((movie) => (
                    <ResultCard key={movie.id} movie={movie} />
                ))}
            </div>
        </form>
    )
}

export default SearchForm
