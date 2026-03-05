import axios from 'axios'

export const makeRequest = axios.create({
    baseURL: "https://node.sangdev.xyz/api/",
    withCredentials: true,
})