import MovieGroup from 'utils/enums/movieGroup'

export interface IMoviesListState {
    movies: MoviesListItem[]
    isLoading: boolean
    error: {} | null
}

export type MoviesListItem = {
    id: number
    posterURL: string
    title: string
    description: string
    rating: Rating
    type: string
    year: number
    group: MovieGroup
}

export type Rating = {
    kp: number
    imdb: number
}
