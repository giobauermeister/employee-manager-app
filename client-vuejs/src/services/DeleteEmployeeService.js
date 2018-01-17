import Api from '@/services/Api'

export default {
  deleteEmployee (tagid) {    
    return Api().post('deleteemployee', tagid)        
  }
}