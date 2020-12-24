var dbconfig = {
  "development": {
    user: "root",
    password: "root1234",
    host: "127.0.0.1",
    port: 3306,
    database: "test",
    connectionLimit: 5
  }
};

var config = dbconfig[process.env.NODE_ENV || 'development'];
var mariadb = require('mariadb');
const pool = mariadb.createPool(config);

module.exports = pool;
