import axios from 'axios'

class Api {
  API_URL = import.meta.env.VITE_API_URL

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.API_URL,
    })
  }

  async get(endpoint) {
    return await this.axiosInstance.get(endpoint)
  }

  async post(endpoint, data) {
    return await this.axiosInstance.post(endpoint, data)
  }

  async patch(endpoint, data) {
    return await this.axiosInstance.patch(endpoint, data)
  }
}

export const api = new Api()
