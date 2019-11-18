import Axios from 'axios'

const api = Axios.create({
  baseURL: 'https://api.github.com/users/gbmatheus/repos',
})

export default api
