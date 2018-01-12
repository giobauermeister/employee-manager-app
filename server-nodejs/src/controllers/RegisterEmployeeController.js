const {Employees} = require('../models')

module.exports = {
  async registerEmployee (req, res) {
    try {
      const employee = await Employees.create(req.body)
      res.send(employee.toJSON())
    } catch (err) {
      res.send(err)
      res.status(400).send({
        error: 'email in use'
      })
    }
  }
}
