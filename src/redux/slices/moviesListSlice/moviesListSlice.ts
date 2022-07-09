import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MovieGroupsData } from 'models/moviesListModels'
import { IMoviesListState, MoviesRequestPayload } from './types'

const initialState: IMoviesListState = {
    movieGroups: [],
    isLoading: false,
    error: null,
}

const moviesListSlice = createSlice({
    name: 'moviesList',
    initialState,
    reducers: {
        fetchMoviesRequest(state, action: PayloadAction<MoviesRequestPayload>) {
            state.isLoading = true
            if (state.movieGroups.length !== 0) {
                state.movieGroups = state.movieGroups.filter(
                    (movie) => movie.group !== action.payload.group,
                )
            }
        },
        fetchMoviesSuccess(state, action: PayloadAction<MovieGroupsData>) {
            state.isLoading = false
            state.error = null
            state.movieGroups = [...state.movieGroups, action.payload]
        },
        fetchMoviesFailure(state, action: PayloadAction<string | null>) {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export const { fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure } =
    moviesListSlice.actions

export default moviesListSlice
