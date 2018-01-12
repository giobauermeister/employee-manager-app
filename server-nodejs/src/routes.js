const AuthenticationController = require('./controllers/AuthenticationController')
const RegisterEmployeeController = require('./controllers/RegisterEmployeeController')

module.exports = app => {
  app.post('/register', AuthenticationController.register)
  app.post('/registeremployee', RegisterEmployeeController.registerEmployee)
}
