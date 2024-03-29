import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/rootSaga'
import movieSlice from './slices/movieSlice/movieSlice'
import moviesListSlice from './slices/moviesListSlice/moviesListSlice'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        moviesList: moviesListSlice.reducer,
        movie: movieSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
