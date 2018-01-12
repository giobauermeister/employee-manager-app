<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <div class="white elevation-2">
                <v-toolbar color="blue darken-3" dark app clipped-left fixed>
                    <v-toolbar-title class="ml-0 pl-3">Novo Funcionário</v-toolbar-title>
                    <v-text-field light solo prepend-icon="search" placeholder="Search" style="max-width: 500px; min-width: 128px"></v-text-field>
                    <v-spacer></v-spacer>
                    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
                    <v-toolbar-items class="hidden-sm-and-down">
                        <v-btn flat>Link One</v-btn>
                        <v-btn flat>Link Two</v-btn>
                        <v-btn flat>Link Three</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
            </div>
        </v-flex>    
    </v-layout>    
    <!--div id="new-employee">
        <h3>Novo Funcionário</h3>
        <v-text-field name="tagid" label="Tag ID" id="tagid" v-model="tagid"></v-text-field>
        <input type="text" name="tagid" placeholder="Tag ID" v-model="tagid">
        <input type="text" name="nome" placeholder="Nome" v-model="name">
        <input type="text" name="cargo" placeholder="Cargo" v-model="title">
        <input type="text" name="departamento" placeholder="Departamento" v-model="department">
        <input type="text" name="celular" placeholder="Celular" v-model="cellphone">
        <input type="text" name="endereco" placeholder="Endereço" v-model="address">
        <button @click="registerEmployee">Registrar Funcionário</button>
        <button >Cancelar</button>
    </div-->
</template>

<script>
import RegisterEmployeeService from "@/services/RegisterEmployeeService"
export default {
    name: 'new-employee',
    data () {
        return  {
            tagid: '',
            name: '',
            title: '',
            department: '',
            cellphone: '',
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
                Address: this.address
            })
            console.log(response.data)
        }
    }
}
</script>

