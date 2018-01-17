<template>
  <div id="edit-employee">
    <div class="row" style="padding-top:50px;">
      <div class="col s12">
        <div class="card z-depth-3">
          <div class="card-content">
            <span class="card-title">
              <h4>Editar Funcionário</h4>          
            </span>
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s6">
                    <i class="material-icons prefix">account_circle</i>
                    <input v-model="EmployeeName" id="icon_prefix" type="text">
                    <label class="active" for="icon_prefix">Nome</label>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">work</i>
                    <input v-model="Title" id="icon_work" type="text">
                    <label class="active" for="icon_work">Cargo</label>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">work</i>
                    <input v-model="Department" id="icon_dept" type="text">
                    <label class="active" for="icon_dept">Departamento</label>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">phone</i>
                    <input v-model="Cellphone" id="icon_telephone" type="text">
                    <label class="active" for="icon_telephone">Telefone</label>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">email</i>
                    <input v-model="Email" id="icon_email" type="text">
                    <label class="active" for="icon_email">Email</label>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">home</i>
                    <input v-model="Address" id="icon_home" type="text">
                    <label class="active" for="icon_home">Endereço</label>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">fingerprint</i>
                    <input v-model="TagID" id="icon_fingerprint" type="text">
                    <label class="active" for="icon_fingerprint">Tag ID</label>
                  </div>
                </div>
              </form>
            </div>
            <!--router-link to="/new">
              <a @click="registerEmployee" class="waves-effect waves-light btn light-blue darken-1 z-depth-4"><i class="material-icons left">check</i>Salvar</a>
            </router-link-->
            <!--a class="waves-effect waves-light btn light-blue darken-1 z-depth-4"><i class="material-icons left">check</i>Salvar</a-->
            <a @click="updateEmployee" class="waves-effect waves-light btn light-blue darken-1 z-depth-4"><i class="material-icons left">check</i>Salvar</a>
            <router-link to="/">
              <a class="waves-effect waves-light btn red darken-1 z-depth-4"><i class="material-icons left">close</i>Cancelar</a>
            </router-link>            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FetchEmployeesService from "@/services/FetchEmployeesService"
import UpdateEmployeeService from "@/services/UpdateEmployeeService"
export default {
  name: 'edit-employee',
  data () {
    return {
      id: null,
      TagID: null,
      EmployeeName: null,
      Title: null,
      Department: null,
      Cellphone: null,
      Email: null,
      Address: null,
      ImgLink: null,  
    }
  },
  beforeRouteEnter (to, from, next) {
    FetchEmployeesService.fetchOneEmployee(to).then(employeeData => {
      employeeData.data.forEach(doc => {
        console.log(doc)
        next (vm => {
          vm.id = doc.id
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
    async updateEmployee () {
      const response = await UpdateEmployeeService.updateEmployee({
        id: this.id,
        TagID: this.TagID,
        EmployeeName: this.EmployeeName,
        Title: this.Title,
        Department: this.Department,
        Cellphone: this.Cellphone,
        Email: this.Email,
        Address: this.Address
      })
      if(response.data.error === 'error') {
        console.log(response.data.errorMsg);
        window.alert(response.data.message);
      } else {
        console.log(response.data);
        window.alert('Dados editados com sucesso!');
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.input-field input[type=text]:focus + label {
  color: #039be5;
}
.input-field input[type=text]:focus {
  border-bottom: 1px solid #039be5;
  box-shadow: 0 1px 0 0 #039be5;
}
.input-field .prefix.active {
  color: #039be5;
}
</style>



