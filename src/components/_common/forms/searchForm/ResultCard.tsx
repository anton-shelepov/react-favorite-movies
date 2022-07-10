import { MoviesListItem } from 'models/moviesListModels'
import s from './SearchForm.module.scss'

interface IProps {
    movie: MoviesListItem
}

const ResultCard: React.FC<IProps> = ({ movie }) => {
    return (
        <div className={s.result_card}>
            <div className={s.block_left}>
                <img className={s.poster} src={movie.posterURL} alt='movie_poster' />
            </div>
            <div className={s.block_right}>
                <h1 className={s.title}>{movie.title}</h1>
            </div>
        </div>
    )
}

export default ResultCard
