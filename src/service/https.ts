import axios from 'axios'

export const http = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_API_BASE_URL
})
