import Api from '@/services/Api'

export default {
  registerEmployee (employeeData) {
    return Api().post('registeremployee', employeeData)
  }
}