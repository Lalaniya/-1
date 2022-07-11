import axios from 'axios'
const http = axios.create({
    baseURL: 'http://127.0.0.1:9527/api',
    timeout:5000
})
http.interceptors.request.use((config)=>{
    return config
},(error)=>{
    return Promise.reject(error)
})
http.interceptors.response.use((response)=>{
    return response
},(error)=>{
    return Promise.reject(error)
})
export default http