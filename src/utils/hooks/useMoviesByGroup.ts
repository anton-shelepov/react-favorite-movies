import MovieGroup from 'utils/enums/movieGroup.enum'
import useAppSelector from './useAppSelector'

const useMoviesByGroup = (group: MovieGroup) => {
    const moviesByGroup = useAppSelector((state) => state.moviesList.movieGroups).find(
        (movie) => movie.group === group,
    )
    return moviesByGroup
}

export default useMoviesByGroup
