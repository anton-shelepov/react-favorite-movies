import { fork } from 'redux-saga/effects'
import movieSaga from './sagas/movieSaga'
import moviesListSaga from './sagas/moviesListSaga'

function* rootSaga() {
    yield fork(moviesListSaga)
    yield fork(movieSaga)
}

export default rootSaga
