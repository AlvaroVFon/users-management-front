import { api } from '../api/api'

class AuthService {
  async login(email, password) {
    try {
      const response = await api.post('/auth/login', {
        email,
        password,
      })

      console.log(response)

      if (response.status === 200) {
        localStorage.setItem('token', response.data.data.token)
      }

      return response
    } catch (error) {
      return error
    }
  }

  async logout() {
    localStorage.removeItem('token')
    window.location.href = '/'
  }
}

export const authService = new AuthService()
