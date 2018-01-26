<template>
  <div class="timesheets">

    <div style="padding-top: 30px; padding-bottom: 10px">
      <router-link to="/">
        <a class="waves-effect waves-light btn grey z-depth-4"><i class="material-icons left">keyboard_arrow_left</i>Voltar</a>
      </router-link>
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
export default {
  name: 'timesheets',
  data () {
    return {
      columns: [
        {
          label: 'Nome',
          field: 'name',
          filterable: true,
        },
        {
          label: 'Data',
          field: 'date',
          type: 'date',
          inputFormat: 'MMMM DD YYYY',
          outputFormat: 'MMMM DD YYYY',
          filterable: true,
        },
        {
          label: 'Clock In',
          field: 'clockin',
          type: 'time',
          inputFormat: 'HH:MM',
          outputFormat: 'HH:MM'
        },
        {
          label: 'Lunch In',
          field: 'lunchin',
          type: 'time',
          inputFormat: 'HH:MM',
          outputFormat: 'HH:MM'
        },
        {
          label: 'Lunch Out',
          field: 'lunchout',
          type: 'time',
          inputFormat: 'HH:MM',
          outputFormat: 'HH:MM'
        },
        {
          label: 'Clock Out',
          field: 'clockout',
          type: 'time',
          inputFormat: 'HH:MM',
          outputFormat: 'HH:MM'
        },
      ],
      rows: [
        {name:"Giovanni",date: 'January 01 2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '02-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '03-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '04-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '05-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '08-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '09-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '10-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '11-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '12-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '15-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '16-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '17-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '18-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '19-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '22-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '23-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '24-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '25-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '26-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '29-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '30-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
        {name:"Giovanni",date: '31-01-2018',clockin: '09:15',lunchin: '09:15',lunchout: '09:15',clockout: '09:15'},
      ],
    }
  }
}
</script>

<style scoped>

</style>
