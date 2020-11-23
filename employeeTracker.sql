-- Drops the database if it already exists --
DROP DATABASE IF EXISTS employeeTracker_db;

-- Created the DB "emloyeeTracker_db" 
CREATE DATABASE employeeTracker_db;

-- Use the DB employeeTracker_db
USE employeeTracker_db;

-- Create Dept Table
create TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- Create Roles Table
create TABLE role (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department (id)
);

-- Create Employee Table
create TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role (id),
    FOREIGN KEY (manager_id) REFERENCES employee (id)
)