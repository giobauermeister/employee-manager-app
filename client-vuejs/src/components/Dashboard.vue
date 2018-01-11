<template>
    <div id="dashboard">
        <h3>Dashboard</h3>
        <ul class="collection width-header">
            <li class="collection-header"><h4>Employees</h4></li>
            <li v-for="employee in employees" v-bind:key="employee.id" class="collection-item"></li>
        </ul>
        <div class="class fixed-action-btn">
            <router-link to="/new" class="btn-floating btn-large waves-effect waves-light red">
                <i class="fa fa-plus"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dashboard',
    data () {
        return  {

        }
    }
}
</script>

