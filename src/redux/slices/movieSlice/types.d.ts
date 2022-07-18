import { Movie } from 'models/movieModels'

export interface IMovieState {
    movie: Movie | {}
    isLoading: boolean
    error: Error | null
}

export type MovieRequestPayload = {
    movieId: number
}
