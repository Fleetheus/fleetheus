import axios from 'axios'

export default {
  login: (username: string, password: string) => {
    return axios.post('/api/users/login', { username, password })
  }
}
