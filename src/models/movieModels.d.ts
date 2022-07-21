export type Movie = {
    id: number
    type: string
    name: string
    description: string
    year: number
    posterURL: string
    rating: Rating
    votes: Votes
    trailers: Trailer[]
    budget: Budget
}

export type Votes = {
    kp: number
    imdb: number
}

export type Rating = {
    kp: number
    imdb: number
}

export type Trailer = {
    name: string
    url: string
}

export type Budget = Currency

export type Fees = {
    world: Currency
    russia: Currency
    usa: Currency
}

export type AboutMovieDataItem = {
    name: string
    value: string
}

// Common models (locals usage)

export type Currency = {
    value: number
    currency: string
}
