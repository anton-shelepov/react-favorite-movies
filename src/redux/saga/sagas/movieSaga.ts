import { PayloadAction } from '@reduxjs/toolkit'
import movieAPI from 'api/movie/movieAPI'
import ResponseMovieData from 'api/movie/types/movieResponseData'
import { AxiosResponse } from 'axios'
import { call, takeEvery } from 'redux-saga/effects'
import { fetchMovieRequest } from 'redux/slices/movieSlice/movieSlice'
import { MovieRequestPayload } from 'redux/slices/movieSlice/types'

function* fetchMovieSaga({ payload: { movieId } }: PayloadAction<MovieRequestPayload>) {
    try {
        const response: AxiosResponse = yield call(movieAPI.getMovie, movieId)
        const data: ResponseMovieData = response.data
    } catch (error) {
        console.log(error)
    }
}

function* movieSaga() {
    yield takeEvery(fetchMovieRequest.type, fetchMovieSaga)
}

export default movieSaga
