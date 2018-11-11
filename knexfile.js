module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://localhost/taskmanager-dev'
    },
    test: {
      client: 'pg',
      connection: 'postgres://localhost/taskmanager-test'
    },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
    }
  }