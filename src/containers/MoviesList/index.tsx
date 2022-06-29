import MovieCard from 'components/MovieCard'
import { MoviesListItem } from 'redux/slices/moviesListSlice/types'
import s from './styles.module.scss'

interface IProps {
    moviesList: MoviesListItem[]
}

const MoviesList: React.FC<IProps> = ({ moviesList }) => {
    return (
        <div className={s.container}>
            {moviesList.map((movie, index) => (
                <MovieCard key={index} movieData={movie} />
            ))}
        </div>
    )
}

export default MoviesList
