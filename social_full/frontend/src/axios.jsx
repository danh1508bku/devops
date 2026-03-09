import axios from 'axios'

export const makeRequest = axios.create({
    baseURL: "https://node.danhbku.xyz/api/",
    withCredentials: true,
})