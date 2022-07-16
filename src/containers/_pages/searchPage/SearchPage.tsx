import MoviesList from 'containers/moviesList/MoviesList'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchMoviesRequest } from 'redux/slices/moviesListSlice/moviesListSlice'
import MovieGroup from 'utils/enums/movieGroup.enum'
import useAppDispatch from 'utils/hooks/useAppDispatch'
import useMoviesByGroup from 'utils/hooks/useMoviesByGroup'
import s from './SearchPage.module.scss'

interface IProps {}

const SearchPage: React.FC<IProps> = (props) => {
    const [searchParams] = useSearchParams()
    const dispatch = useAppDispatch()

    const requestMoviesParams = `?${Array.from(searchParams)
        .map((param) => `${param[0]}=${param[1]}`)
        .toString()
        .replaceAll(',', '&')}`

    const searchedMovies = useMoviesByGroup(MovieGroup.SEARCH)
    const moviesLimitOnPage = searchParams.get('limit') ?? 20

    useEffect(() => {
        dispatch(
            fetchMoviesRequest({ group: MovieGroup.SEARCH, searchParams: requestMoviesParams }),
        )
    }, [searchParams])

    return (
        <div className={s.container}>
            <MoviesList
                moviesList={searchedMovies}
                fetchMoviesActionPayload={{ group: MovieGroup.SEARCH, searchParams: () => '' }}
                title={`Результаты поиска по "${searchParams.get('search')}"`}
                moviesLimit={+moviesLimitOnPage > 50 ? +moviesLimitOnPage : 50}
            />
        </div>
    )
}

export default SearchPage
