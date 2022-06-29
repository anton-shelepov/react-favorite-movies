import axios from 'axios'

const privateClient = axios.create({
    baseURL: 'https://api.kinopoisk.dev',
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        token: process.env.REACT_APP_KINOPOISK_TOKEN,
    },
})

export default privateClient
