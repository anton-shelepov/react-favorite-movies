import MovieCard from 'components/movieCard/MovieCard'
import MovieCardSkeleton from 'components/movieCardSkeleton/MovieCardSkeleton'
import Pagination from 'components/pagination/Pagination'
import { MovieGroupsData } from 'models/moviesListModels'
import { LegacyRef, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchMoviesRequest } from 'redux/slices/moviesListSlice/moviesListSlice'
import MovieGroup from 'utils/enums/movieGroup.enum'
import useAppDispatch from 'utils/hooks/useAppDispatch'
import scssVariables from 'utils/scss/variables.scss'
import s from './MoviesList.module.scss'

interface IProps {
    moviesList: MovieGroupsData | undefined
    title: string
    fetchMoviesActionPayload: {
        searchParams: (page: number) => string
        group: MovieGroup
    }
    withSorting?: boolean
    moviesLimit?: number
    withSearchParamPagination?: boolean
}

const MoviesList: React.FC<IProps> = ({
    moviesList,
    title,
    fetchMoviesActionPayload,
    moviesLimit = 10,
    withSearchParamPagination,
}) => {
    const dispatch = useAppDispatch()
    const sectionElement: LegacyRef<HTMLElement> | undefined = useRef(null)
    const [searchParams, setSearchParams] = useSearchParams()

    const onPageChange = (page: number) => {
        scrollToTopOfSection()

        if (withSearchParamPagination) {
            setSearchParams({ ...Object.fromEntries(searchParams), page: page.toString() })
            return
        }

        dispatch(
            fetchMoviesRequest({
                group: fetchMoviesActionPayload.group,
                searchParams: fetchMoviesActionPayload.searchParams(page),
            }),
        )
    }

    const scrollToTopOfSection = () => {
        const sectionYPos = sectionElement.current?.offsetTop
        const headerHeight = scssVariables.headerHeightDesktop

        if (sectionYPos) {
            scrollTo(0, sectionYPos - headerHeight)
        }
    }

    return (
        <section ref={sectionElement} about={moviesList?.group.toLowerCase()}>
            <h1 className={s.title}>{title}</h1>
            <div className={s.container}>
                {!moviesList ? (
                    <MovieCardSkeleton cardsCount={moviesLimit} />
                ) : (
                    moviesList.movies.map((movie) => <MovieCard key={movie.id} movieData={movie} />)
                )}
            </div>
            {moviesList?.pages && (
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
