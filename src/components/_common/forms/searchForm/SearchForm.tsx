import privateClient from 'api/privateClient'
import { AxiosResponse } from 'axios'
import classNames from 'classnames'
import Loader from 'components/loader/Loader'
import { MoviesListItem } from 'models/moviesListModels'
import {
    ChangeEventHandler,
    FocusEvent,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
} from 'react'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { createSearchParams } from 'react-router-dom'
import GlobalSvgSelector from 'utils/svg/GlobalSvgSelector'
import SvgId from 'utils/svg/svgId.enum'
import ResultCard from './resultCard/ResultCard'
import s from './SearchForm.module.scss'

interface IProps {
    isHide: boolean
}

const SearchForm: React.FC<IProps> = ({ isHide }) => {
    const [searchResults, setSearchResults] = useState<MoviesListItem[] | null>(null)
    const [showResults, setShowResults] = useState(false)
    const [isSearching, setIsSearching] = useState(false)

    const { handleSubmit, control, reset } = useForm()
    const searchDelay = useRef(setTimeout(() => {}, 0))
    const searchInputElement: MutableRefObject<HTMLInputElement | null> = useRef(null)

    const navigate = useNavigate()

    const searchPattern = /^[a-zA-Zа-яА-Я0-9_: ,+/().]+$/g

    useEffect(() => {
        if (isHide) {
            setShowResults(false)
            searchInputElement.current?.blur()
        }
    }, [isHide])

    const onFormSubmit = ({ searchText }: FieldValues) => {
        navigate({
            pathname: 'search',
            search: createSearchParams({
                field: 'name',
                search: searchText,
                isStrict: 'false',
                sortField: 'votes.kp',
                sortType: '-1',
                limit: '20',
            }).toString(),
        })
        searchInputElement.current?.blur()
        reset({ searchText: '' })
    }

    const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const searchBetweenInputsDelay = 250
        const searchValue = e.currentTarget.value

        clearTimeout(searchDelay.current)

        if (!searchPattern.test(searchValue)) {
            setSearchResults(null)
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
        }, searchBetweenInputsDelay)
    }

    const onInputFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
        if (e.currentTarget.value === '' && searchResults?.length !== 0) {
            setSearchResults(null)
        }
        setShowResults(true)
    }

    const onInputBlur = () => {
        setShowResults(false)
    }

    const searchResultsClasses = classNames(
        s.search_results,
        showResults && searchResults !== null ? s.uncollapsed : undefined,
    )

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

            {isSearching && <Loader color='black' containerMaxWidth='50%' size='small' />}

            <button className={s.submit_btn} type='submit'>
                <GlobalSvgSelector id={SvgId.FIND} />
            </button>

            <div className={searchResultsClasses}>
                {searchResults?.length === 0 ? (
                    <span className={s.empty_message}>
                        {`По запросу "${searchInputElement.current?.value}" ничего не найдено`}
                    </span>
                ) : (
                    searchResults?.map((movie) => <ResultCard key={movie.id} movie={movie} />)
                )}
            </div>
        </form>
    )
}

export default SearchForm
