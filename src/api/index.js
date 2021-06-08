/* eslint-disable no-param-reassign */
import axios from 'axios'

const Axios = axios.create({
  baseURL: '',
  timeout: 10000,
})

const pendingRequest = new Map()
const createRequestKey = (config) => {
  const {
    method, url, params, data,
  } = config
  return [method, url, JSON.stringify(params), JSON.stringify(data)].join('&')
}
const removeRequest = (config) => {
  const requestKey = createRequestKey(config)
  if (pendingRequest.has(requestKey)) {
    const cancel = pendingRequest.get(requestKey)
    cancel(requestKey)
    pendingRequest.delete(requestKey)
  }
}

const addPendingRequest = (config) => {
  const requestKey = createRequestKey(config)
  config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
    if (!pendingRequest.has(requestKey)) {
      pendingRequest.set(requestKey, cancel)
    }
  })
}

// 请求前拦截
Axios.interceptors.request.use((config) => {
  removeRequest(config)
  addPendingRequest(config)
  return config
}, (error) => Promise.reject(error))

Axios.interceptors.response.use(
  (response) => {
    removeRequest(response.config) // 从pendingRequest对象中移除请求
    return response
  },
  (error) => {
    removeRequest(error.config || {}) // 从pendingRequest对象中移除请求
    if (axios.isCancel(error)) {
      console.log(`已取消的重复请求：${error.message}`)
    } else {
      // 添加异常处理
    }
    return Promise.reject(error)
  },
)
export default Axios
