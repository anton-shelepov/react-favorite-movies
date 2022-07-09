import privateClient from 'api/privateClient'

const movieAPI = {
    path: 'movie',

    async getMoviesWithSearchParams(searchParams: string) {
        return await privateClient.get(movieAPI.path + searchParams)
    },
}

export default movieAPI
