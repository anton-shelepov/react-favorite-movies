export const getNewestMoviesParams = (page: number) => {
    return (
        `?page=${page}` +
        `&field=year` +
        `&search=${new Date().getFullYear()}` +
        `&sortField=year` +
        `&sortType=-1` +
        `&sortField=votes.kp` +
        `&sortType=-1`
    )
}

export const getFilmsParams = (page: number) => {
    return (
        `?page=${page}` +
        `&sortField=votes.kp` +
        `&sortType=-1` +
        `&sortField=rating.kp` +
        `&sortType=-1` +
        `&field=type` +
        `&search=movie`
    )
}

export const getSerialsParams = (page: number) => {
    return (
        `?page=${page}` +
        `&sortField=votes.kp` +
        `&sortType=-1` +
        `&sortField=rating.kp` +
        `&sortType=-1` +
        `&field=type` +
        `&search=tv-series`
    )
}
