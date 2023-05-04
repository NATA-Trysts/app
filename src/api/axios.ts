import axios from 'axios'

// const BASE_URL = 'http://localhost:3500'
// const BASE_URL = 'http://localhost:3000/api'
// const BASE_URL = 'http://trysts-be-ingress-1565635518.ap-southeast-1.elb.amazonaws.com/api'
const BASE_URL = 'https://api.clasrum.fun/api'

export default axios.create({
  baseURL: BASE_URL,
})

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})
