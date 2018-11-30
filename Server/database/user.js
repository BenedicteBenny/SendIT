const { Pool, Client } = require('pg');

const pg = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'send_it',
  password: '#beneza1',
  port: '5432'
});

module.exports = pg;
