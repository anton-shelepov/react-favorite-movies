import { Movie } from 'models/movieModels'
import languageMap from 'utils/constants/languageMap'
import s from './MovieDetails.module.scss'

interface IProps {
    movieDetails: Movie
}

const MovieDetails: React.FC<IProps> = ({
    movieDetails: { budget, description, id, name, posterURL, rating, trailers, type, votes, year },
}) => {
    return (
        <div className={s.container}>
            <div className={s.content_wrapper}>
                <div className={s.block_left}>
                    <img className={s.poster_large} alt='large_poster' src={posterURL} />
                </div>
                <div className={s.block_right}>
                    <div className={s.title}>
                        <h1 className={s.name}>{name}</h1>
                    </div>
                    <span className={s.year_and_type}>{`${languageMap[type]} ${year}`}</span>
                    <p className={s.description}>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
