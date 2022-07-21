import imdbIcon from 'assets/icons/imdb-icon.png'
import kinopoiskIcon from 'assets/icons/kinopoisk-icon.png'
import { Rating } from 'models/movieModels'
import numberWithSpaces from 'utils/scripts/numberWithSpaces'
import s from './Ratings.module.scss'

interface IProps {
    rating: Rating
    votes?: Rating
    withVotesCount?: boolean
}

const Ratings: React.FC<IProps> = ({
    rating: { imdb, kp },
    votes = { imdb: 0, kp: 0 },
    withVotesCount,
}) => {
    const ratings = [
        { ratingValue: kp, image: kinopoiskIcon, votes: votes?.kp },
        { ratingValue: imdb, image: imdbIcon, votes: votes?.imdb },
    ]

    return (
        <div className={s.container}>
            {ratings.map((rating, index) => (
                <div className={s.ratings_item} key={index}>
                    <span className={s.rating}>
                        {rating.ratingValue}
                        <img src={rating.image} alt='rating_icon' />
                    </span>
                    {withVotesCount && (
                        <span className={s.votes_count}>
                            {rating.votes ? numberWithSpaces(rating.votes) : 'нет оценок'}
                        </span>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Ratings
