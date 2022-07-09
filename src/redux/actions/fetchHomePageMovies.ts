import { getFilmsParams, getNewestMoviesParams, getSerialsParams } from 'api/movie/movieParams'
import { fetchMoviesRequest } from 'redux/slices/moviesListSlice/moviesListSlice'
import { AppDispatch } from 'redux/store'
import MovieGroup from 'utils/enums/movieGroup.enum'

function fetchHomePageMovies() {
    return (dispatch: AppDispatch) => {
        dispatch(
            fetchMoviesRequest({
                searchParams: getNewestMoviesParams(1),
                group: MovieGroup.NEWEST,
            }),
        )
        dispatch(
            fetchMoviesRequest({
                searchParams: getFilmsParams(1),
                group: MovieGroup.FILMS,
            }),
        )
        dispatch(
            fetchMoviesRequest({
                searchParams: getSerialsParams(1),
                group: MovieGroup.SERIALS,
            }),
        )
    }
}

export default fetchHomePageMovies
