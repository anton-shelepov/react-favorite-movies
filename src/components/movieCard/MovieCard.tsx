import preloadFone from 'assets/images/preload-fone.png'
import Loader from 'components/loader/Loader'
import { MoviesListItem } from 'models/moviesListModels'
import { useState } from 'react'
import imdbIcon from '../../assets/icons/imdb-icon.png'
import kinopoiskIcon from '../../assets/icons/kinopoisk-icon.png'
import s from './MovieCard.module.scss'

interface IProps {
    movieData: MoviesListItem
}

const MovieCard: React.FC<IProps> = ({ movieData }) => {
    const { posterURL, rating, title, year, description } = movieData
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const onImageLoad = () => {
        setIsImageLoaded(true)
    }
    return (
        <div className={s.container}>
            <div className={s.block_top}>
                <img className={s.poster} src={posterURL} alt='movie_poster' onLoad={onImageLoad} />
                <div className={s.background_fill}>
                    <img src={preloadFone} alt='preload' />
                </div>
                {!isImageLoaded && (
                    <div className={s.loader}>
                        <Loader size='small' color='#ffffff' />
                    </div>
                )}
                <div className={s.description}>{description}</div>
            </div>
            <div className={s.block_bottom}>
                <h1 className={s.title}>{title}</h1>
                <span className={s.additional}>{year}</span>
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
