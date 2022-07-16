import HomePage from 'containers/_pages/homePage/HomePage'
import SearchPage from 'containers/_pages/searchPage/SearchPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import s from './App.module.scss'
import Header from './components/header/Header'

function App() {
    return (
        <div className={s.app}>
            <BrowserRouter>
                <Header />
                <div className={s.content_wrapper}>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/search' element={<SearchPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
