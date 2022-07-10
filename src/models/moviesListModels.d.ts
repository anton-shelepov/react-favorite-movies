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

export type MovieGroupsData = {
    group: MovieGroup
    movies: MoviesListItem[]
    pages: {
        count: number
        limit: number
        currentPage: number
    }
}

export type Rating = {
    kp: number
    imdb: number
}
