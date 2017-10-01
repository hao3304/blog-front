import axios from 'axios'

const prefix = "http://localhost:8080";

axios.interceptors.request.use(config=>{
  let token = localStorage['token'];
  if(token) {
    config.headers['Authorization'] = 'Bearer ' + token
  }
  return config
})

axios.interceptors.response.use(response=>{
  return response
},err=>{
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break

      case 401:
        err.message = '未授权，请登录'
        window.location.href="/login";
        break

      case 403:
        err.message = '拒绝访问'
        break

      case 404:
        err.message = `请求地址出错: ${err.response.config.url}`
        break

      case 408:
        err.message = '请求超时'
        break

      case 500:
        err.message = '服务器内部错误'
        break

      case 501:
        err.message = '服务未实现'
        break

      case 502:
        err.message = '网关错误'
        break

      case 503:
        err.message = '服务不可用'
        break

      case 504:
        err.message = '网关超时'
        break

      case 505:
        err.message = 'HTTP版本不受支持'
        break

      default:
    }
  }

  return Promise.reject(err)
})

export const doLogin = (params)=>axios.post(prefix + '/login',params)
export const getUsers = ()=>axios.get(prefix +'/admin/user');
