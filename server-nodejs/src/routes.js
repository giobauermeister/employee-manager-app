const AuthenticationController = require('./controllers/AuthenticationController')
const RegisterEmployeeController = require('./controllers/RegisterEmployeeController')
const FetchDatabaseController = require('./controllers/FetchDatabaseController')

module.exports = app => {
  app.post('/register', AuthenticationController.register)
  app.post('/registeremployee', RegisterEmployeeController.registerEmployee)
  app.get('/', FetchDatabaseController.fetchEmployees)
}
