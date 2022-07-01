import privateClient from 'api/privateClient'

const movieAPI = {
    path: 'movie',

    async getNewestMovies(page = 1, limit = 10) {
        return await privateClient.get(
            movieAPI.path +
                `?page=${page}` +
                `&field=year` +
                `&search=${new Date().getFullYear()}` +
                `&sortField=year` +
                `&sortType=-1` +
                `&sortField=votes.kp` +
                `&sortType=-1`,
        )
    },

    // async getFilms() {
    //     return await privateClient.get(
    //         this.path +
    //     )
    // }
}

export default movieAPI
