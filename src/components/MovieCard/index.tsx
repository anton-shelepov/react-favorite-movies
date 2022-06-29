import { MoviesListItem } from 'redux/slices/moviesListSlice/types'
import imdbIcon from '../../assets/icons/imdb-icon.png'
import kinopoiskIcon from '../../assets/icons/kinopoisk-icon.png'
import s from './styles.module.scss'

interface IProps {
    movieData: MoviesListItem
}

const MovieCard: React.FC<IProps> = ({ movieData }) => {
    const { posterURL, rating, title, year, description } = movieData

    const shortText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text
        return `${text.slice(0, maxLength)}...`
    }

    return (
        <div className={s.container}>
            <div className={s.block_top}>
                <img className={s.poster} src={posterURL} alt='movie_poster' />
                <div className={s.description}>{shortText(description, 250)}</div>
            </div>
            <div className={s.block_bottom}>
                <h1 className={s.title}>{title}</h1>
                <span className={s.year}>{year}</span>
                <div className={s.ratings}>
                    <div className={s.rating}>
                        <img src={kinopoiskIcon} alt='kinopoisk_rating' />
                        <span className={s.rating_value}>{rating.kp}</span>
                    </div>
                    <div className={s.rating}>
                        <span className={s.rating_value}>{rating.imdb}</span>
                        <img src={imdbIcon} alt='imdb_rating' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
