import axios from 'axios'

const privateClient = axios.create({
    baseURL: process.env.REACT_APP_KINOPOISK_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        token: process.env.REACT_APP_KINOPOISK_TOKEN,
    },
})

export default privateClient
