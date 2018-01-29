<template>
  <div class="timesheets">

    <div class="row" style="padding-top: 30px;">
      <div class="col s6" >
        <router-link to="/">
          <a class="waves-effect waves-light btn grey z-depth-4"><i class="material-icons left">keyboard_arrow_left</i>Voltar</a>
        </router-link>
      </div>
      <!--div class="col s3">
        <vue-monthly-picker
          :inputClass="{'input': isDisplayInput}"
          :disabled="isDisable"
          :monthLabels="locale"
          :min="min"
          :max="max"
          @selected="handleSelect"
          v-model="selectedMonth">
        </vue-monthly-picker>
      </div-->
      <div class="col s3">
        <datepicker v-on:selected="customFormatter" placeholder="Data" format="MMMM yyyy" name="teste" language="pt-br"></datepicker>
      </div>
    </div>

    

   <vue-good-table
      title="Timesheets"
      :columns="columns"
      :rows="rows"
      :paginate="true"
      :lineNumbers="false"/>




  </div>
</template>

<script>
import moment from 'moment'
import Datepicker from 'vuejs-datepicker';
import VueMonthlyPicker from 'vue-monthly-picker'
import FetchTimesheetsService from "@/services/FetchTimesheetsService"
export default {
  name: 'timesheets',
  components: {
    Datepicker,
    VueMonthlyPicker
  },
  
  data () {
    return {

      selectedMonth: moment(),
      isDisable: false,
      isDisplayInput: true,
      locale: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],  
      min: null,
      max: null,
      
      month: '',
      year: '',
      date: '',

      timesheets: [],
      disabled: {},
      format: 'dd MM yyyy',
      name: "teste",
      columns: [
        {
          label: 'Nome',
          field: 'EmployeeName',
          filterable: true,
        },
        {
          label: 'Data',
          field: 'Data',
          type: 'date',
          inputFormat: 'YYYY-MM-DD',
          outputFormat: 'YYYY-MM-DD',
          filterable: true,
        },
        {
          label: 'Clock In',
          field: 'ClockIn',
          type: 'time',
          inputFormat: 'HH:MM',
          outputFormat: 'HH:MM'
        },
        {
          label: 'Lunch In',
          field: 'LunchIn',
          type: 'time',
          inputFormat: 'HH:MM',
          outputFormat: 'HH:MM'
        },
        {
          label: 'Lunch Out',
          field: 'LunchOut',
          type: 'time',
          inputFormat: 'HH:MM',
          outputFormat: 'HH:MM'
        },
        {
          label: 'Clock Out',
          field: 'ClockOut',
          type: 'time',
          inputFormat: 'HH:MM',
          outputFormat: 'HH:MM'
        },
      ],
      rows: [
        // {name:"",date: '01-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '02-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '03-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '04-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '05-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '08-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '09-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '10-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '11-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '12-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '15-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '16-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '17-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '18-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '19-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '22-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '23-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '24-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '25-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '26-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '29-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '30-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        // {name:"Giovanni",date: '31-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
      ],
    }
  },
  methods: {
    handleSelect (value) {
      console.log('Select', value)
    },
    setSelectRange (min, max) {
      this.min = min
      this.max = max
    },
    getData (date) {
      console.log(`got data: ${date}`)
    },
    customFormatter(value) {
      //console.log(moment(value).format('MMMM YYYY'))
      this.rows = []
      //this.month = moment(value).format('MM');
      //this.year = moment(value).format('YYYY');
      //console.log(`hello: ${this.month} ${this.year}`)
      this.date = moment(value).format('YYYY-MM');
      FetchTimesheetsService.fetchTimesheetsByDate(this.date).then(timesheetsData => {
        timesheetsData.data.forEach(doc => {
          // console.log(doc.EmployeeName)
          const data = {
            // 'TagID': doc.TagID,
            'EmployeeName': doc.EmployeeName,
            'Data': doc.Data,
            'ClockIn': doc.ClockIn,
            'LunchIn': doc.LunchIn,
            'LunchOut': doc.LunchOut,
            'ClockOut': doc.ClockOut
          }
          // console.log(data.EmployeeName)
          // console.log(data.Title)
          this.rows.push(data)
          console.log(data)
          
                  
        })
      // console.log(employeeData)
      // console.log(employeeData.data.length)
      // this.employees = employeeData.data
      // console.log(this.employees)
      }) // cloud catch error here like so: https://stackoverflow.com/questions/44456594/why-is-axios-get-returning-a-promise-object
      return moment(value).format('MMMM YYYY');  
    }
  },
  created () {
    // console.log('created');
    // FetchEmployeesService.fetchEmployees();
    FetchTimesheetsService.fetchTimesheets().then(timesheetsData => {
      timesheetsData.data.forEach(doc => {
        // console.log(doc.EmployeeName)
        const data = {
          // 'TagID': doc.TagID,
          'EmployeeName': doc.EmployeeName,
          'Data': doc.Data,
          'ClockIn': doc.ClockIn,
          'LunchIn': doc.LunchIn,
          'LunchOut': doc.LunchOut,
          'ClockOut': doc.ClockOut
        }
        // console.log(data.EmployeeName)
        // console.log(data.Title)
        this.rows.push(data)
        console.log(data)
        
                
      })
      // console.log(employeeData)
      // console.log(employeeData.data.length)
      // this.employees = employeeData.data
      // console.log(this.employees)
    }) // cloud catch error here like so: https://stackoverflow.com/questions/44456594/why-is-axios-get-returning-a-promise-object
  }
}
</script>

<style scoped>

</style>
