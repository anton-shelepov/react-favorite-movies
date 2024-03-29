import { PayloadAction } from '@reduxjs/toolkit'
import movieAPI from 'api/movie/movieAPI'
import MoviesListResponseData from 'api/movie/types/moviesListResponseData'
import { AxiosResponse } from 'axios'
import { MovieGroupsData } from 'models/moviesListModels'
import { call, put, takeEvery } from 'redux-saga/effects'
import {
    fetchMoviesRequest,
    fetchMoviesSuccess,
} from 'redux/slices/moviesListSlice/moviesListSlice'
import { MoviesRequestPayload } from 'redux/slices/moviesListSlice/types'

function* fetchMoviesSaga({
    payload: { group, searchParams },
}: PayloadAction<MoviesRequestPayload>) {
    try {
        const response: AxiosResponse<MoviesListResponseData> = yield call(
            movieAPI.getMoviesWithSearchParams,
            searchParams,
        )
        const data: MovieGroupsData = {
            group,
            movies: response.data.docs.map((responseData) => ({
                id: responseData.id,
                posterURL: responseData.poster.previewUrl,
                title: responseData.name,
                description: responseData.description,
                rating: {
                    kp: responseData.rating.kp,
                    imdb: responseData.rating.imdb,
                },
                type: responseData.type,
                year: responseData.year,
                group,
            })),
            pages: {
                count: response.data.pages,
                limit: response.data.limit,
                currentPage: response.data.page,
            },
        }

        yield put(fetchMoviesSuccess(data))
    } catch (error) {
        console.log(error)
    }
}

function* moviesListSaga() {
    yield takeEvery(fetchMoviesRequest.type, fetchMoviesSaga)
}

export default moviesListSaga
