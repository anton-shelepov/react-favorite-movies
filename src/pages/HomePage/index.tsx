import MoviesList from 'containers/MoviesList'
import { useEffect } from 'react'
import { fetchNewestMoviesRequest } from 'redux/slices/moviesListSlice'
import MovieGroup from 'utils/enums/movieGroup'
import useAppDispatch from 'utils/hooks/useAppDispatch'
import useAppSelector from 'utils/hooks/useAppSelector'
import s from './styles.module.scss'

interface IProps {}

const HomePage: React.FC<IProps> = () => {
    const dispatch = useAppDispatch()
    const movies = useAppSelector((state) => state.moviesList.movies)

    useEffect(() => {
        dispatch(fetchNewestMoviesRequest())
    }, [])

    const sections = [
        {
            group: MovieGroup.NEWEST,
            title: 'Новинки',
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
                    <MoviesList moviesList={section.movies} />
                </div>
            ))}
        </div>
    )
}

export default HomePage
