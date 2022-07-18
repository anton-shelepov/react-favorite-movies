import MoviesList from 'containers/moviesList/MoviesList'
import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchMoviesRequest } from 'redux/slices/moviesListSlice/moviesListSlice'
import MovieGroup from 'utils/enums/movieGroup.enum'
import useAppDispatch from 'utils/hooks/useAppDispatch'
import useMoviesByGroup from 'utils/hooks/useMoviesByGroup'
import setPageTitle from 'utils/scripts/setPageTitle'
import s from './SearchPage.module.scss'

interface IProps {}

const SearchPage: React.FC<IProps> = (props) => {
    const [searchParams] = useSearchParams()
    const dispatch = useAppDispatch()
    const searchedMovies = useMoviesByGroup(MovieGroup.SEARCH)

    let moviesLimitOnPage = searchParams.get('limit') ?? 20
    const maxLimitOnPage = 50

    // Check search param "limit" value for over than max allowed
    if (moviesLimitOnPage >= maxLimitOnPage) {
        searchParams.set('limit', maxLimitOnPage.toString())
        moviesLimitOnPage = maxLimitOnPage
    }

    const requestMoviesParams = useMemo(() => {
        return `?${Array.from(searchParams)
            .map((param) => `${param[0]}=${param[1]}`)
            .toString()
            .replaceAll(',', '&')}`
    }, [searchParams])

    // Only first render
    useEffect(() => {
        setPageTitle('Поиск')
    }, [])

    // First render and if requestMoviesParams was changed
    useEffect(() => {
        dispatch(
            fetchMoviesRequest({ group: MovieGroup.SEARCH, searchParams: requestMoviesParams }),
        )
    }, [requestMoviesParams])

    return (
        <div className={s.container}>
            <MoviesList
                moviesList={searchedMovies}
                fetchMoviesActionPayload={{
                    group: MovieGroup.SEARCH,
                    searchParams: (page: number) => `${requestMoviesParams}&page=${page}`,
                }}
                title={`Результаты поиска по "${searchParams.get('search')}"`}
                moviesLimit={+moviesLimitOnPage}
                withSearchParamPagination
            />
        </div>
    )
}

export default SearchPage
