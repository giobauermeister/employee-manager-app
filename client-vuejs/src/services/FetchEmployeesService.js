import Api from '@/services/Api'

export default {
  fetchEmployees () {    
    return Api().get('fetchemployees')
  },
  fetchOneEmployee (employeeID) {
    return Api().post('viewemployee', employeeID)
  }
}