import _axios from 'axios'
import {
  Message,
  Loading
} from 'element-ui'

const axios = _axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 30000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  maxContentLength: 2000,
  withCredentials: true
});
let loading = null
// /**请求拦截*/
axios.interceptors.request.use(
  config => {
    if (config.showLoading) {
      // 在请求先展示加载框
      loading = Loading.service({
        text: '正在加载中......'
      })
    }
    return config
  },
  err => {
    Promise.reject(err);
  }
)
/** 响应拦截*/
axios.interceptors.response.use(
  res => {
    if(loading){
      loading.close()
    }
    return res
  },
  err => {
    if(loading){
      loading.close()
    }
    Message({
      message: "网络异常",
      type: 'error'
    })
    return Promise.reject(err)
  }
)
export default axios
