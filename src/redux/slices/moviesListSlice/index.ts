import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMoviesListState, MoviesListItem } from './types'

const initialState: IMoviesListState = {
    movies: [],
    isLoading: false,
    error: null,
}

const moviesListSlice = createSlice({
    name: 'moviesList',
    initialState,
    reducers: {
        fetchNewestMoviesRequest(state) {
            state.isLoading = true
        },
        fetchNewestMoviesSuccess(state, action: PayloadAction<MoviesListItem[]>) {
            state.isLoading = false
            state.error = null
            state.movies = action.payload
        },
        fetchNewestMoviesFailure(state, action: PayloadAction<string | null>) {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export const { fetchNewestMoviesRequest, fetchNewestMoviesSuccess, fetchNewestMoviesFailure } =
    moviesListSlice.actions

export default moviesListSlice
