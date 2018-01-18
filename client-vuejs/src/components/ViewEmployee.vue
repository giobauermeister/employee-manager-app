<template>
  <div id="view-employee">
    <div class="row" style="padding-top:50px;">
      <div class="col s12">
        <div class="card z-depth-3">
          <div class="card-content">
            <span class="card-title">
              <div>
                <img v-bind:src="ImgLink" class="circle" align="center" width="20%" height="20%">
                <h4 style="display: inline;">{{EmployeeName}}</h4>
              </div>          
            </span>
            <ul class="collection">
              <li class="collection-item"><p style="display: inline;"><font size="3"><b>Cargo: </b></font></p>{{Title}}</li>
              <li class="collection-item"><p style="display: inline;"><font size="3"><b>Departamento: </b></font></p>{{Department}}</li>
              <li class="collection-item"><p style="display: inline;"><font size="3"><b>Telefone: </b></font></p>{{Cellphone}}</li>
              <li class="collection-item"><p style="display: inline;"><font size="3"><b>Email: </b></font></p>{{Email}}</li>
              <li class="collection-item"><p style="display: inline;"><font size="3"><b>Endereço: </b></font></p>{{Address}}</li>
              <li class="collection-item"><p style="display: inline;"><font size="3"><b>Tag ID: </b></font></p>{{TagID}}</li>
            </ul>
            <router-link to="/">
              <a class="waves-effect waves-light btn grey z-depth-4"><i class="material-icons left">keyboard_arrow_left</i>Voltar</a>
            </router-link>
            <router-link v-bind:to="'/edit/'+ TagID">
              <a class="waves-effect waves-light btn light-blue darken-1 z-depth-4"><i class="material-icons left">create</i>Editar</a>
            </router-link>
            <a @click="deleteEmployee" class="waves-effect waves-light btn red lighten-1 z-depth-4"><i class="material-icons left">delete_forever</i>Excluir</a>          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FetchEmployeesService from "@/services/FetchEmployeesService"
import DeleteEmployeeService from "@/services/DeleteEmployeeService"
export default {
  name: 'view-employee',
  data () {
    return {
      TagID: null,
      EmployeeName: null,
      Title: null,
      Department: null,
      Cellphone: null,
      Email: null,
      Address: null,
      ImgLink: null 
    }
  },
  beforeRouteEnter (to, from, next) {
    FetchEmployeesService.fetchOneEmployee(to).then(employeeData => {
      employeeData.data.forEach(doc => {
        console.log(doc)
        next (vm => {
          vm.TagID = doc.TagID
          vm.EmployeeName = doc.EmployeeName
          vm.Title = doc.Title
          vm.Department = doc.Department
          vm.Cellphone = doc.Cellphone
          vm.Email = doc.Email
          vm.Address = doc.Address
          vm.ImgLink = '../../static/' + doc.TagID + '.png'
        })        
      })            
    })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      FetchEmployeesService.fetchOneEmployee(this.$route.employee_id).then(employeeData => {
        employeeData.data.forEach(doc => {
          this.TagID = doc.TagID
          this.EmployeeName = doc.EmployeeName,
          this.Title = doc.Title,
          this.Department = doc.Department,
          this.Cellphone = doc.Cellphone,
          this.Email = doc.Email,
          this.Address = doc.Address,
          this.ImgLink = '../../static/' + doc.TagID + '.png'
        })  
      })
    },
    async deleteEmployee () {
      console.log('inside method deleteEmployee')
      console.log(this.TagID)
      if (confirm('Tem certeza de que deseja deletar?')) {
        DeleteEmployeeService.deleteEmployee({TagID: this.TagID}).then(data => {
          console.log(data.status)
          if (data.status == '200') {
          window.alert('Funcionário deletado com sucesso!')
          this.$router.push('/')
          } else {
            window.alert('Ocorreu um erro')  
          }                
        })
      }           
    }
  }
}
</script>