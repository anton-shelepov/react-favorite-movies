import { fork } from 'redux-saga/effects'
import moviesListSaga from './sagas/moviesListSaga'

function* rootSaga() {
    yield fork(moviesListSaga)
}

export default rootSaga
