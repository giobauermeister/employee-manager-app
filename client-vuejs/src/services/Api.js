import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://piclock.local:8081/'
  })
}