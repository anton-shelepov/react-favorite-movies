import { MovieGroupsData } from 'models/moviesListModels'
import MovieGroup from 'utils/enums/movieGroup.enum'

export interface IMoviesListState {
    movieGroups: MovieGroupsData[]
    isLoading: boolean
    error: {} | null
}

export type MoviesRequestPayload = {
    searchParams: string
    group: MovieGroup
}
