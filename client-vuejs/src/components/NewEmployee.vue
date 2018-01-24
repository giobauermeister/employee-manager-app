<template>
  <div id="new-employee">


    <div class="row" style="padding-top:50px;">
      
      <!--div align="center" class="col s12">
        <circle10 v-if="show == true"></circle10>
      </div-->
      <div v-if="show" align="center" class="col s12">
        <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div><div class="gap-patch">
              <div class="circle"></div>
            </div><div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
      </div>

      

      <div class="col s12">
        <div class="card z-depth-3">
          <div class="card-content">
            <span class="card-title">
              <h4 >Registrar Novo Funcionário</h4>          
            </span>

            <div class="row">

              <form>
                <div class="row">

                  <div class="input-field col s6">
                    <i class="material-icons prefix">person</i>
                    <input id="icon_prefix" type="text" v-model="name">
                    <label for="icon_prefix">Nome</label>
                  </div>

                  <div class="input-field col s6">
                    <i class="material-icons prefix">work</i>
                    <input id="icon_work" type="text" v-model="title">
                    <label for="icon_work">Cargo</label>
                  </div>

                  <div class="input-field col s6">
                    <i class="material-icons prefix">work</i>
                    <input id="icon_dept" type="text" v-model="department">
                    <label for="icon_dept">Departamento</label>
                  </div>

                  <div class="input-field col s6">
                    <i class="material-icons prefix">phone</i>
                    <input id="icon_telephone" type="text" v-model="cellphone">
                    <label for="icon_telephone">Telefone</label>
                  </div>

                  <div class="input-field col s6">
                    <i class="material-icons prefix">email</i>
                    <input id="icon_email" type="text" v-model="email">
                    <label for="icon_email">Email</label>
                  </div>

                  <div class="input-field col s6">
                    <i class="material-icons prefix">home</i>
                    <input id="icon_home" type="text" v-model="address">
                    <label for="icon_home">Endereço</label>
                  </div>

                  <div class="input-field col s6">
                    <i class="material-icons prefix">fingerprint</i>
                    <input id="icon_fingerprint" type="text" v-model="tagid">
                    <label for="icon_fingerprint">Tag ID</label>
                  </div>

                  <div class="file-field input-field col s6">                  
                    <div class="btn grey waves-effect waves-light z-depth-4">
                      <span>Photo Upload</span>
                      <input name="myImage" type="file" @change="onImgSelected">
                    </div>
                    <div class="file-path-wrapper">
                      <input class="file-path" type="text">
                    </div>
                  </div>

                </div>
              </form>
            </div>
            <!--router-link to="/new">
              <a @click="registerEmployee" class="waves-effect waves-light btn light-blue darken-1 z-depth-4"><i class="material-icons left">check</i>Salvar</a>
            </router-link-->
            <a @click="registerEmployee" type="submit" class="waves-effect waves-light btn light-blue darken-1 z-depth-4"><i class="material-icons left">check</i>Salvar</a>
            <router-link to="/">
              <a class="waves-effect waves-light btn red lighten-1 z-depth-4"><i class="material-icons left">close</i>Cancelar</a>
            </router-link>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterEmployeeService from "@/services/RegisterEmployeeService"
import {Circle10} from 'vue-loading-spinner'

export default {
  name: 'new-employee',
  components: {
    Circle10
  },
  data () {
    return {
      tagid: '',
      name: '',
      title: '',
      department: '',
      cellphone: '',
      email: '',
      address: '',
      photo: '',
      show: false
    }
  },
  methods: {

    onImgSelected (e) {
      var img = e.target.files || e.dataTransfer.files
      console.log(img[0].name)      
      this.photo = img[0]
      console.log('photo selected')      
    },
    async registerEmployee () {
      if (confirm('Tem certeza de que deseja criar novo usuário?')) {
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

          console.log('SENDING PHOTO!')      
          const formData = new FormData()
          formData.append('myImage', this.photo, this.tagid + '.png') // renomeia o arquivo da foto com o campo TagID
          formData.append('tagid', this.tagid)
          RegisterEmployeeService.uploadPhoto(formData).then(responseUpload => {
            console.log('response from photo upload: ')        
            console.log(responseUpload)
          })          

          window.alert('Funcionário criado com sucesso!');
          this.show = true
          setTimeout(this.goToHome, 2000)
        }        
      }      
    },
    goToHome () {
      this.show = false
      this.$router.push('/')
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

