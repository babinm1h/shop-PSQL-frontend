import axios from "axios"


export const REACT_APP_API_URL = "http://localhost:7777/"


const $host = axios.create({
    baseURL: REACT_APP_API_URL,
    withCredentials: true
})


const $authHost = axios.create({
    baseURL: REACT_APP_API_URL,
    withCredentials: true
})


$authHost.interceptors.request.use(config => {
    config.headers!.authorization = `Bearer ${localStorage.getItem("token")}`
    return config
})


export { $host, $authHost }