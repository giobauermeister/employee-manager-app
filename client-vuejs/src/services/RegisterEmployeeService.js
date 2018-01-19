import Api from '@/services/Api'

export default {
  registerEmployee (employeeData) {
    return Api().post('registeremployee', employeeData)
  },
  uploadPhoto (photo) {
    // console.log('inside register service upload photo')
    // console.log(photo)        
    return Api().post('uploadphoto', photo)
  }
}