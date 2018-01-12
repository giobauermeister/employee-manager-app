module.exports = (sequelize, DataTypes) =>
  sequelize.define('Employees', {
    TagID: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    },
    EmployeeName: DataTypes.STRING,
    Title: DataTypes.STRING,
    Department: DataTypes.STRING,
    Cellphone: DataTypes.STRING,
    Address: DataTypes.STRING
  }, {
    timestamps: false
  })
