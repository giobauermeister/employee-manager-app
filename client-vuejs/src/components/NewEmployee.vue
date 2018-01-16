<template>
  <div id="new-employee">
    <div class="row" style="padding-top:50px;">
      <div class="col s12">
        <div class="card z-depth-3">
          <div class="card-content">
            <span class="card-title">
              <h4>Registrar Novo Funcionário</h4>          
            </span>
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s6">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" class="validate" v-model="name">
                    <label for="icon_prefix">Nome</label>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">work</i>
                    <input id="icon_work" type="text" class="validate" v-model="title">
                    <label for="icon_work">Cargo</label>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">work</i>
                    <input id="icon_dept" type="text" class="validate" v-model="department">
                    <label for="icon_dept">Departamento</label>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">phone</i>
                    <input id="icon_telephone" type="tel" class="validate" v-model="cellphone">
                    <label for="icon_telephone">Telefone</label>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">email</i>
                    <input id="icon_email" type="email" class="validate" v-model="email">
                    <label for="icon_email">Email</label>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">home</i>
                    <input id="icon_home" type="text" class="validate" v-model="address">
                    <label for="icon_home">Endereço</label>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">fingerprint</i>
                    <input id="icon_fingerprint" type="text" class="validate" v-model="tagid">
                    <label for="icon_fingerprint">Tag ID</label>
                  </div>
                </div>
              </form>
            </div>
            <!--router-link to="/new">
              <a @click="registerEmployee" class="waves-effect waves-light btn light-blue darken-1 z-depth-4"><i class="material-icons left">check</i>Salvar</a>
            </router-link-->
            <a @click="registerEmployee" class="waves-effect waves-light btn light-blue darken-1 z-depth-4"><i class="material-icons left">check</i>Salvar</a>
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
import RegisterEmployeeService from "@/services/RegisterEmployeeService"
export default {
  name: 'new-employee',
  data () {
    return {
      tagid: '',
      name: '',
      title: '',
      department: '',
      cellphone: '',
      email: '',
      address: ''
    }
  },
  methods: {
    async registerEmployee () {
      const response = await RegisterEmployeeService.registerEmployee({
        TagID: this.tagid,
        EmployeeName: this.name,
        Title: this.title,
        Department: this.department,
        Cellphone: this.cellphone,
        Email: this.email,
        Address: this.address
      })
      if(response.data.error === 'error') {
        console.log(response.data.errorMsg);
        window.alert(response.data.message);
      } else {
        console.log(response.data);
        window.alert('Dados salvos com sucesso!');
        this.$router.push('/')
      }
    }
  }
}
</script>

