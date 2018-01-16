<template>
  <div id="dashboard">
    <div class="row" style="padding-top:50px;">
      <div class="col s12">
        <div class="card z-depth-3">
          <div class="card-content">
            <span class="card-title">
              <h4>Funcionários Registrados</h4>
              <router-link to="/new">
                <a class="waves-effect waves-light btn light-blue darken-1 z-depth-4"><i class="material-icons left">add</i>Adicionar</a>
              </router-link>          
            </span>
            <ul class="collection">
              <li href="/" v-for="employee in employees" v-bind:key="employee.TagID" class="collection-item avatar">
                <p><font size="3"><b>{{employee.EmployeeName}}</b></font></p>
                <p>{{employee.Title}}</p>              
              </li>
            </ul>            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FetchEmployeesService from "@/services/FetchEmployeesService"
export default {
  name: 'dashboard',
  data () {
    return {
      employees: []
    }
  },
  created () {
    console.log('created');
    // FetchEmployeesService.fetchEmployees();
    FetchEmployeesService.fetchEmployees().then(employeeData => {
      employeeData.data.forEach(doc => {
        // console.log(doc.EmployeeName)
        const data = {
          'TagID': doc.TagID,
          'EmployeeName': doc.EmployeeName,
          'Title': doc.Title,
          'Department': doc.Department,
          'Cellphone': doc.Cellphone,
          'Email': doc.Email,
          'Address': doc.Address
        }
        console.log(data.EmployeeName)
        console.log(data.Title)
        this.employees.push(data)
                
      })
      // console.log(employeeData)
      // console.log(employeeData.data.length)
      // this.employees = employeeData.data
      // console.log(this.employees)
    }) // cloud catch error here like so: https://stackoverflow.com/questions/44456594/why-is-axios-get-returning-a-promise-object
  }
}
</script>

