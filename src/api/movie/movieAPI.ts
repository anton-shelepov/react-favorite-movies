import privateClient from 'api/privateClient'

const movieAPI = {
    path: 'movie',

    async getMoviesWithSearchParams(searchParams: string) {
        return await privateClient.get(movieAPI.path + searchParams)
    },

    async getMovie(movieId: number) {
        return await privateClient.get(movieAPI.path, {
            params: {
                field: 'id',
                search: movieId,
            },
        })
    },
}

export default movieAPI
