module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'filipeflop',
    user: process.env.DB_USER || 'filipeflop',
    password: process.env.DB_PASS || 'filipeflop',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './filipeflop.db'
    }
  }
}
