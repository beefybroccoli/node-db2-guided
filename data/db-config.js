// the correct env is figured out
// we connect to the db using the correct setting
const knex = require('knex')
const settings = require('../knexfile')

const env = process.env.NODE_ENV || 'development'
const 