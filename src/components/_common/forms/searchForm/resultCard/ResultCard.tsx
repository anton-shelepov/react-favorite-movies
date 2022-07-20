import imdbIcon from 'assets/icons/imdb-icon.png'
import kinopoiskIcon from 'assets/icons/kinopoisk-icon.png'
import { MoviesListItem } from 'models/moviesListModels'
import { Link } from 'react-router-dom'
import languageMap from 'utils/constants/languageMap'
import s from './ResultCard.module.scss'

interface IProps {
    movie: MoviesListItem
}

const ResultCard: React.FC<IProps> = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.id}`} className={s.result_card}>
            <div className={s.block_left}>
                <img className={s.poster} src={movie.posterURL} alt='movie_poster' />
            </div>
            <div className={s.block_right}>
                <div className={s.block_top}>
                    <h1 className={s.title}>{movie.title}</h1>
                    <div className={s.rating}>
                        <span className={s.rating_item}>
                            {movie.rating.kp}
                            <img src={kinopoiskIcon} alt='kp_icon' />
                        </span>
                        <span className={s.rating_item}>
                            {movie.rating.imdb}
                            <img src={imdbIcon} alt='imdb_icon' />
                        </span>
                    </div>
                </div>
                <span className={s.additional}>{`${languageMap[movie.type]} (${movie.year})`}</span>
                <p className={s.description}>{movie.description}</p>
            </div>
        </Link>
    )
}

export default ResultCard
