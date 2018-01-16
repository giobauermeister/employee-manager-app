const {Employees} = require('../models')

module.exports = {
  async fetchEmployees (req, res) {
    console.log('fetching')
    try {
      console.log('fetching inside try')
      const employees = await Employees.findAll()
      const employeesData = JSON.parse(JSON.stringify(employees))
      console.log(employeesData)
      res.send(employeesData)
      // res.send(employees.toJSON())
      // console.log(Employees.findAll().to)
      console.log('got elements!')
    } catch (err) {
      console.log(err)
      res.send({
        error: 'error',
        errorMsg: err
      })
    }
  }
}
// const {Employees} = require('../models')

// module.exports = {
//   async registerEmployee (req, res) {
//     try {
//       const employee = await Employees.create(req.body)
//       res.send(employee.toJSON())
//     } catch (err) {
//       res.send(err)
//       res.status(400).send({
//         error: 'email in use'
//       })
//     }
//   }
// }
