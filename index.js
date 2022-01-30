// Import database connection and inquirer
const db = require('./db/connection');
const inquirer = require('inquirer');

// initialization function to kick off the command line application
const init = () => {
    // storing message and choices as variables here
    let message = 'What would you like to do?';
    let choices = [
        'View all departments', 
        'View all roles', 
        'View all employees', 
        'Add a department', 
        'Add a role', 
        'Add an employee', 
        'Update an employee role',
        "Exit"
    ];
    
    inquirer.prompt(
        {
            type: 'list',
            name: 'choice',
            message: message,
            choices: choices
        }
    ).then((promptChoice) => {
        switch (promptChoice.choice) {
            case "View all departments":
                viewAllDepartments();
                init();
                break;
            case "View all roles":
                viewAllRoles();
                init();
                break;
            case "View all employees":
                viewAllEmployees();
                init();
                break;
            case "Add a department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Update an employee role":
                console.log('Elected to updat an employee');
                break;
            case "Exit":
                console.log("Application closing, thank you for using the Employee Database.");
                break;
        }
    });
};

// sql query to show the departments table from the database
const viewAllDepartments = () => {
    db.query(
        `SELECT * FROM departments;`,
        (err, result) => {
            if(err) console.log(err)
            console.log('\n')
            console.table(result)
        }
    )
};

// sql query to show the roles table from the database
const viewAllRoles = () => {
    db.query(
        `SELECT * FROM roles;`,
        (err, result) => {
            if(err) console.log(err)
            console.log('\n')
            console.table(result)
        }
    )
};

// sql query to show the employees table from the database
const viewAllEmployees = () => {
    db.query(
        `SELECT * FROM employees;`,
        (err, result) => {
            if(err) console.log(err)
            console.log('\n')
            console.table(result)
        }
    )
};

// function to add a new department to the departments table
function addDepartment () {
    inquirer.prompt(
        {
            type: 'input',
            name: 'addDepartment',
            message: 'Enter the name of the department you would like to add. (30 char limit)',
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log('Please enter a valid department name.')
                    return false;
                }
            }
        }
    ).then((data) => {
        sql = `INSERT INTO departments VALUES (DEFAULT, '${data.addDepartment}');`
        db.query(sql, (err, res) => {
            if(err) console.log(err)
        });
        console.log(`${data.addDepartment} department added to the database.`)
        init();
    })
}

// function to add a new role to the roles table
function addRole () {
    let departments = ['None'];
    db.query(`SELECT department_name FROM departments;`, (err, res) => {
        if(err) console.log(err);
        res.forEach(element => departments.push(element.department_name));
    })
    return inquirer.prompt([
        {
            type: 'input',
            name: 'jobTitle',
            message: 'Enter the name of the Role you would like to add. (30 char limit)',
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log('Please enter a valid role name.')
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'salary',
            message: 'Enter an annual salary for the role. (Numbers only!)',
            validate: input => {
                if(input) {
                    return true;
                } 
                else {
                    console.log('Please enter a valid number.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'department',
            message: 'Select which department this role belongs to.',
            choices: departments
        }
    ]).then((data) => {
        sql = `INSERT INTO roles VALUES (DEFAULT, '${data.jobTitle}', ${data.salary}, '${data.department}');`
        db.query(sql, (err, res) => {
            if(err) console.log(err)
        });
        console.log(`${data.jobTitle} role added to the database.`)
        init();
    })
}

// function to add a new employee to the employees table
function addEmployee () {
    let roles = [];
    let managers = ['None'];
    let roleInfo = [];
    let departmentName;
    let salaryAmount;

    // query to retrieve roles 
    db.query(`SELECT job_title FROM roles;`, (err, res) => {
        if(err) console.log(err);
        res.forEach(element => roles.push(element.job_title));
    })
    // query to retrieve employees
    db.query(`SELECT first_name, last_name FROM employees;`, (err, res) => {
        if(err) console.log(err);
        res.forEach(element => managers.push(element.first_name + ' ' + element.last_name));
    })

    // query to retrieve role info to be used to match salaries and departments
    db.query(`SELECT job_title, department_name, salary FROM roles`, (err, res) => {
        if(err) console.log(err);
        roleInfo = res;
    })

    return inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter the first name of the employee you would like to add. (30 char limit)',
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log('Please enter a valid first name.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Enter the last name of the employee you would like to add. (30 char limit)',
            validate: input => {
                if(input) {
                    return true;
                } 
                else {
                    console.log('Please enter a valid last name.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'Select which role this employee will have.',
            choices: roles
        },
        {
            type: 'list',
            name: 'manager',
            message: 'Select who will be managing this employee.',
            choices: managers
        }
    ]).then((data) => {
        roleInfo.forEach(element => {
            switch (data.role) {
                case element.job_title:
                    departmentName = element.department_name;
                    salaryAmount = element.salary;
            }
        })
        sql = `INSERT INTO employees VALUES (DEFAULT, '${data.firstName}', '${data.lastName}', '${data.role}', '${departmentName}', ${salaryAmount}, '${data.manager}');`
        db.query(sql, (err, res) => {
            if(err) console.log(err)
        });
        console.log(`${data.role} role added to the database.`)
        init();
    })
}

init();