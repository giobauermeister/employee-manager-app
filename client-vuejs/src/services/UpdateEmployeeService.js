import Api from '@/services/Api'

export default {
  updateEmployee (employeeData) {
    console.log('UpdateEmployeeService.js: dados para upload:', employeeData)    
    return Api().post('updateemployee', employeeData)
  }
}