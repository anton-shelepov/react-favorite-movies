import movieAPI from 'api/movie'
import { AxiosResponse } from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchNewestMoviesRequest, fetchNewestMoviesSuccess } from 'redux/slices/moviesListSlice'
import { MoviesListItem } from 'redux/slices/moviesListSlice/types'
import MovieGroup from 'utils/enums/movieGroup'

function* fetchNewestMoviesSaga() {
    try {
        const response: AxiosResponse = yield call(movieAPI.getNewestMovies.bind(movieAPI), 1)
        console.log(response.data)
        const data: MoviesListItem[] = response.data.docs.map((movieData: any) => ({
            id: movieData.id,
            posterURL: movieData.poster.previewUrl,
            title: movieData.name,
            description: movieData.description,
            rating: {
                kp: movieData.rating.kp,
                imdb: movieData.rating.imdb,
            },
            type: movieData.type,
            year: movieData.year,
            group: MovieGroup.NEWEST,
        }))
        yield put(fetchNewestMoviesSuccess(data))
    } catch (error) {
        console.log(error)
    }
}

function* moviesListSaga() {
    yield takeLatest(fetchNewestMoviesRequest.type, fetchNewestMoviesSaga)
}

export default moviesListSaga
