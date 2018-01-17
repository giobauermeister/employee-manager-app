const {Employees} = require('../models')

module.exports = {
  async deleteEmployee (req, res) {
    console.log('received delete')
    console.log(req.body.TagID)
    // res.send(req.body)
    try {
      console.log('fetching inside try')
      const queryResult = await Employees.destroy({
        where: {
          'TagID': req.body.TagID
        }
      })
      console.log(queryResult)
      res.send(req.body.TagID)
    } catch (err) {
      console.log(err)
      res.send({
        error: 'error',
        errorMsg: err
      })
    }
  }
}
