import { getFilmsParams, getNewestMoviesParams, getSerialsParams } from 'api/movie/movieParams'
import MoviesList from 'containers/moviesList/MoviesList'
import { useEffect } from 'react'
import fetchHomePageMovies from 'redux/actions/fetchHomePageMovies'
import MovieGroup from 'utils/enums/movieGroup.enum'
import useAppDispatch from 'utils/hooks/useAppDispatch'
import useAppSelector from 'utils/hooks/useAppSelector'
import setPageTitle from 'utils/scripts/setPageTitle'
import s from './HomePage.module.scss'

interface IProps {}

const HomePage: React.FC<IProps> = () => {
    const dispatch = useAppDispatch()
    const moviesListState = useAppSelector((state) => state.moviesList)

    const movieGroups = moviesListState.movieGroups

    useEffect(() => {
        setPageTitle('Главная')
        dispatch(fetchHomePageMovies())
    }, [])

    return (
        <div className={s.container}>
            <MoviesList
                fetchMoviesActionPayload={{
                    group: MovieGroup.NEWEST,
                    searchParams: getNewestMoviesParams,
                }}
                title='Популярные новинки'
                moviesList={movieGroups.find((movie) => movie.group === MovieGroup.NEWEST)}
            />
            <MoviesList
                fetchMoviesActionPayload={{
                    group: MovieGroup.FILMS,
                    searchParams: getFilmsParams,
                }}
                title='Фильмы'
                moviesList={movieGroups.find((movie) => movie.group === MovieGroup.FILMS)}
            />
            <MoviesList
                fetchMoviesActionPayload={{
                    group: MovieGroup.SERIALS,
                    searchParams: getSerialsParams,
                }}
                title='Сериалы'
                moviesList={movieGroups.find((movie) => movie.group === MovieGroup.SERIALS)}
            />
        </div>
    )
}

export default HomePage
