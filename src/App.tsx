import HomePage from 'pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'

function App() {
    return (
        <div className='app'>
            <Header />
            <div className='content_wrapper'>
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
