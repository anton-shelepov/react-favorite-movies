import MovieCard from 'components/movieCard/MovieCard'
import MovieCardSkeleton from 'components/movieCardSkeleton/MovieCardSkeleton'
import Pagination from 'components/pagination/Pagination'
import { MovieGroupsData } from 'models/moviesListModels'
import { LegacyRef, useEffect, useRef } from 'react'
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
    withSorting?: boolean
}

const MoviesList: React.FC<IProps> = ({ moviesList, title, fetchMoviesActionPayload }) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        console.log('render')
    })
    const sectionElement: LegacyRef<HTMLElement> | undefined = useRef(null)
    console.log(sectionElement.current)
    const onPageChange = (page: number) => {
        dispatch(
            fetchMoviesRequest({
                group: fetchMoviesActionPayload.group,
                searchParams: fetchMoviesActionPayload.searchParams(page),
            }),
        )
    }

    return (
        <section ref={sectionElement}>
            <h1 className={s.title}>{title}</h1>
            <div className={s.container}>
                {moviesList === undefined ? (
                    <MovieCardSkeleton cardsCount={10} />
                ) : (
                    moviesList.movies.map((movie) => <MovieCard key={movie.id} movieData={movie} />)
                )}
            </div>
            {moviesList?.pages !== undefined && (
                <Pagination
                    pages={moviesList.pages}
                    onPageChange={onPageChange}
                    currentPage={moviesList.pages.currentPage}
                />
            )}
        </section>
    )
}

export default MoviesList
