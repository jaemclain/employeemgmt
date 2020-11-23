var mysql = require("mysql");
var inquirer = require("inquirer");
const { start } = require("repl");

// Connection to mysql db
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employeeTracker_db"
});

// Connect to server and db
connection.connect(function(err){
    if(err) throw err;
    start();
});