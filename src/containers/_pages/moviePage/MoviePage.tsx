import MovieDetails from 'components/movieDetails/MovieDetails'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieRequest } from 'redux/slices/movieSlice/movieSlice'
import useAppDispatch from 'utils/hooks/useAppDispatch'
import useAppSelector from 'utils/hooks/useAppSelector'
import s from './MoviePage.module.scss'

interface IProps {}

const MoviePage: React.FC<IProps> = (props) => {
    const dispatch = useAppDispatch()
    const { movieId } = useParams()

    const movieData = useAppSelector((state) => state.movie.movie)

    useEffect(() => {
        if (movieId) {
            dispatch(fetchMovieRequest({ movieId: Number.parseInt(movieId) }))
        }
    }, [])

    return (
        <div className={s.container}>
            <MovieDetails movieDetails={movieData} />
        </div>
    )
}

export default MoviePage
