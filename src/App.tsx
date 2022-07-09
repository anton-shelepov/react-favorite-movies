import HomePage from 'containers/_pages/home-page/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import s from './App.module.scss'
import Header from './components/header/Header'

function App() {
    return (
        <div className={s.app}>
            <Header />
            <div className={s.content_wrapper}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App
