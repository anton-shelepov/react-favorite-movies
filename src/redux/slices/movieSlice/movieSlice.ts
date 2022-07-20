import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Movie } from 'models/movieModels'
import { IMovieState } from './types'

const initialState: IMovieState = {
    movie: {} as Movie,
    isLoading: false,
    error: null,
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        fetchMovieRequest(state, action: PayloadAction<{ movieId: number }>) {
            state.isLoading = true
            state.error = null
            state.movie = {} as Movie
        },
        fetchMovieSuccess(state, action: PayloadAction<Movie>) {
            state.isLoading = false
            state.error = null
            state.movie = action.payload
        },
        fetchMovieFailure(state, action: PayloadAction<Error | null>) {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export const { fetchMovieRequest, fetchMovieSuccess, fetchMovieFailure } = movieSlice.actions

export default movieSlice
