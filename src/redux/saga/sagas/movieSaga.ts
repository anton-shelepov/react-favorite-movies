import { PayloadAction } from '@reduxjs/toolkit'
import movieAPI from 'api/movie/movieAPI'
import ResponseMovieData from 'api/movie/types/movieResponseData'
import { AxiosResponse } from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchMovieRequest, fetchMovieSuccess } from 'redux/slices/movieSlice/movieSlice'
import { MovieRequestPayload } from 'redux/slices/movieSlice/types'
import setPageTitle from 'utils/scripts/setPageTitle'

function* fetchMovieSaga({ payload: { movieId } }: PayloadAction<MovieRequestPayload>) {
    try {
        const response: AxiosResponse<ResponseMovieData> = yield call(movieAPI.getMovie, movieId)
        const data = response.data
        yield put(
            fetchMovieSuccess({
                budget: data.budget,
                description: data.description,
                id: data.id,
                name: data.name,
                posterURL: data.poster.url,
                rating: data.rating,
                trailers: data.videos.trailers,
                type: data.type,
                votes: data.votes,
                year: data.year,
            }),
        )
        setPageTitle(data.name)
    } catch (error) {
        console.log(error)
    }
}

function* movieSaga() {
    yield takeEvery(fetchMovieRequest.type, fetchMovieSaga)
}

export default movieSaga
