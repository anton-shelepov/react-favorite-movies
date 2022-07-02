import Loader from 'components/Loader'
import MoviesList from 'containers/MoviesList'
import { useEffect } from 'react'
import { fetchNewestMoviesRequest } from 'redux/slices/moviesListSlice'
import MovieGroup from 'utils/enums/movieGroup'
import useAppDispatch from 'utils/hooks/useAppDispatch'
import useAppSelector from 'utils/hooks/useAppSelector'
import setPageTitle from 'utils/scripts/setPageTitle'
import s from './styles.module.scss'

interface IProps {}

const HomePage: React.FC<IProps> = () => {
    const dispatch = useAppDispatch()
    const moviesListState = useAppSelector((state) => state.moviesList)

    const movies = moviesListState.movies

    useEffect(() => {
        setPageTitle('Главная')
        dispatch(fetchNewestMoviesRequest())
    }, [])

    const sections = [
        {
            group: MovieGroup.NEWEST,
            title: 'Популярные новинки',
            movies: movies.filter((movie) => movie.group === MovieGroup.NEWEST),
        },
        {
            group: MovieGroup.FILM,
            title: 'Фильмы',
            movies: [],
        },
        {
            group: MovieGroup.SERIAL,
            title: 'Сериалы',
            movies: [],
        },
    ]

    return (
        <div className={s.container}>
            {sections.map((section) => (
                <div key={section.title} className={s.section}>
                    <h1 className={s.section_title}>{section.title}</h1>
                    {section.movies.length === 0 && moviesListState.isLoading ? (
                        <Loader />
                    ) : (
                        <MoviesList moviesList={section.movies} />
                    )}
                </div>
            ))}
        </div>
    )
}

export default HomePage
