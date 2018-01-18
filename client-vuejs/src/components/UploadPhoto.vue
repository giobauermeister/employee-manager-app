<template>
  <div class="upload">
    <div class="row" style="padding-top:50px;">
      <div class="col s12">
        <div class="card z-depth-3">
          <div class="card-content">
            <span class="card-title">
              <h4>Photo Upload</h4>          
            </span>
            <div class="row">
              <form>

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

                <div class="input-field col s6">
                  <div class="file-field input-field">
                    <div class="btn grey">
                      <span>Upload Photo</span>
                      <input name="test" type="file" @change="onFileChange">
                    </div>
                    <div class="file-path-wrapper">
                      <input class="file-path" type="text">
                    </div>
                  </div>
                </div>

                <button type="submit" class="btn ">Submit</button>

              </form>    
              <a @click="sendFormData" type="submit" class="waves-effect waves-light btn light-blue darken-1 z-depth-4"><i class="material-icons left">check</i>Enviar</a>
            </div>            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterEmployeeService from "@/services/RegisterEmployeeService"

export default {
  name: 'upload-photo',
  data () {
    return {
      tagid: '',
      name: '',
      title: '',
      department: '',
      cellphone: '',
      email: '',
      address: '',
      photo: ''   
    }
  },
  methods: {
    onFileChange (e) {
      var img = e.target.files || e.dataTransfer.files
      img[0].name == this.tagid
      console.log('changing image file name for tagid')
      
      console.log(img[0].name)
      this.photo = img[0]
      console.log('New picture selected!')
      // if (this.$refs.pictureInput.image) {
      //   console.log('Picture loaded.')
      // } else {
      //   console.log('FileReader API not supported: use the <form>, Luke!')
      // }
      // return this.submitForm(img[0])      
    },
    sendFormData(){
      console.log('SENDING DATA!')      
      // const formData = new FormData()
      // formData.append('myImage', this.photo)
      // formData.append('tagid', this.tagid)
      // formData.append('name', this.name)
      // console.log(formData)      
      // var response = RegisterEmployeeService.uploadPhoto(formData)
      // console.log(response)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
