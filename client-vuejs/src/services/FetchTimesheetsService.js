import Api from '@/services/Api'

export default {
  fetchTimesheets () {        
    return Api().get('fetchtimesheets')
  },
  fetchTimesheetsByDate (date) {        
    return Api().get(`fetchtimesheets/?date=${date}`)
  }
}