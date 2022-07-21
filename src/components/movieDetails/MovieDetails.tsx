import Ratings from 'components/ratings/Ratings'
import { AboutMovieDataItem, Movie } from 'models/movieModels'
import ReactPlayer from 'react-player'
import languageMap from 'utils/constants/languageMap'
import AboutMovie from './aboutMovie/AboutMovie'
import s from './MovieDetails.module.scss'

interface IProps {
    movieDetails: Movie
}

const MovieDetails: React.FC<IProps> = ({
    movieDetails: { budget, description, id, name, posterURL, rating, trailers, type, votes, year },
}) => {
    const aboutMovieData: AboutMovieDataItem[] = []

    return (
        <div className={s.container}>
            <div className={s.content_wrapper}>
                <div className={s.block_left}>
                    <img className={s.poster_large} alt='large_poster' src={posterURL} />
                    <ReactPlayer url={trailers[0].url} width='100%' />
                </div>
                <div className={s.block_right}>
                    <div className={s.title}>
                        <h1 className={s.name}>{`${name} (${languageMap[type]} ${year})`}</h1>
                        <Ratings rating={rating} votes={votes} withVotesCount />
                    </div>
                    <p className={s.description}>{description}</p>
                    <AboutMovie aboutMovieData={[]} />
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
