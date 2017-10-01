import axios from 'axios'

const prefix = "http://localhost:8080";

export const doLogin = (params)=>axios.post(prefix + '/login',params)
