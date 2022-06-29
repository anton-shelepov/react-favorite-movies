import privateClient from 'api/privateClient'

const movieAPI = {
    path: 'movie',

    async getNewestMovies(page: number) {
        return await privateClient.get(
            this.path +
                `?field=year` +
                `&search=${new Date().getFullYear()}` +
                `&page=${page}` +
                `&sortField=year` +
                `&sortType=-1` +
                `&sortField=votes.kp` +
                `&sortType=-1`,
        )
    },
}

export default movieAPI
