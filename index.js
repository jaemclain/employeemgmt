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
connection.connect(function (err) {
    if (err) throw err;
    start();
});


// List of options to start
function start() {
    inquirer.prompt({
        name: "options",
        message: "Please choose an option from the following...",
        type: "list",
        choices: [
            "Add a Department",
            "Add a Role",
            "Add Employee",
            "View Department",
            "View Roles",
            "View Employees",
            "Update Employee Role",
            "Leave"
        ]
    }).then(function ({ options }) {
        if (options === "Add a Department") {
            addDepartment()
        } else if (options === "Add a Role") {
            addRole()
        } else if (options === "Add Employee") {
            addEmployee()
        } else if (options === "View Department") {
            viewDepartment()
        } else if (options === "View Roles") {
            viewRoles()
        } else if (options === "View Employees") {
            viewEmployees()
        } else if (options === "Update Employee Role") {
            updateEmployeeRole()
        } else {
            connection.end()
            process.exit(0)
        }
    });
};


// Add a Department
function addDepartment() {
    inquirer.prompt({
        name: "name",
        message: "What is the name of the department?",
        type: "input"
    }).then(function (answers) {
        connection.query("INSERT INTO department SET ?", { name: answers.name }, function (err, res) {
            if (err) throw err
            console.log(response);
            console.log("Added Department")
            start()
        })
    });
};


// Add a Role
function addRole() {
    inquirer.prompt([{
        name: "title",
        message: "What role would you like to add?",
        type: "input"
    },
    {
        name: "salary",
        message: "How much is the salary?",
        type: "input"
    },
    {
        name: "Department_id",
        message: "What is the department id?",
        type: "list",
        choices: [1, 2, 3]
    }
    ]).then(function(answers){
        connection.query("INSERT INTO role SET ?", {title: answers.title, salary: answers.salary, department_id: answers.department_id},
        function (err){
            if (err) throw err
            console.table("Added Role");
            start()
        })
    });
};


// Add a Employee
function addEmployee(){
    inquirer.prompt([
        {
            name: "first_name",
            message: "What is the employee's first name?",
            type: "input"
        },
        {
            name: "last_name",
            message: "What is the employee's last name?",
            type: "input"
        },
        {
            name: "role_id",
            message: "What is the role Id?",
            type: "list",
            choices: [1, 2, 3, 4]
        },
        {
            name: "manager_id",
            message: "What is the manager Id?",
            type: "input"
        }
    ]).then(function(answers){
        connection.query("INSERT INTO employee SET ?", {first_name: answers.first_name, last_name: answers.last_name, role_id: answers.role_id, manager_id: answers.manager_id},
        function (err, res){
            if (err) throw err
            console.table("Added Employee");
            start()
        })
    });
};