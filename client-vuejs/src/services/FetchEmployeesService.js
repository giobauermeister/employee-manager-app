import Api from '@/services/Api'

export default {
  fetchEmployees () {    
    return Api().get('/')
  }
}