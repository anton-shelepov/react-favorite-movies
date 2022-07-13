import Loader from 'components/loader/Loader'
import MovieCard from 'components/movieCard/MovieCard'
import Pagination from 'components/pagination/Pagination'
import { MovieGroupsData } from 'models/moviesListModels'
import { fetchMoviesRequest } from 'redux/slices/moviesListSlice/moviesListSlice'
import MovieGroup from 'utils/enums/movieGroup.enum'
import useAppDispatch from 'utils/hooks/useAppDispatch'
import s from './MoviesList.module.scss'

interface IProps {
    moviesList: MovieGroupsData | undefined
    title: string
    fetchMoviesActionPayload: {
        searchParams: (page: number) => string
        group: MovieGroup
    }
}

const MoviesList: React.FC<IProps> = ({ moviesList, title, fetchMoviesActionPayload }) => {
    const dispatch = useAppDispatch()
    const onPageChange = (page: number) => {
        dispatch(
            fetchMoviesRequest({
                group: fetchMoviesActionPayload.group,
                searchParams: fetchMoviesActionPayload.searchParams(page),
            }),
        )
    }

    return (
        <section>
            <h1 className={s.title}>{title}</h1>
            {moviesList === undefined ? (
                <Loader />
            ) : (
                <>
                    <div className={s.container}>
                        {moviesList.movies.map((movie) => (
                            <MovieCard key={movie.id} movieData={movie} />
                        ))}
                    </div>
                    <Pagination
                        pages={moviesList.pages}
                        onPageChange={onPageChange}
                        currentPage={moviesList.pages.currentPage}
                    />
                </>
            )}
        </section>
    )
}

export default MoviesList
