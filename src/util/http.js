import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const http = axios.create({
    baseURL: 'http://127.0.0.1:9527/api',
    timeout:5000
})
// 请求前开始拦截
http.interceptors.request.use((config)=>{
    NProgress.start()
    return config
},(error)=>{
    return Promise.reject(error)
})
// 返回数据之前拦截
http.interceptors.response.use((response)=>{
    NProgress.done()
    return response
},(error)=>{
    return Promise.reject(error)
})
export default http