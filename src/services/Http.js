import axios from 'axios'

export const Http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
})
