const db = require('./db/connection');
const inquirer = require('inquirer');

const init = () => {
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
                console.log('Elected to add a department');
                break;
            case "Add a role":
                console.log('Elected to add a role');
                break;
            case "Add an employee":
                console.log('Elected to add an employee');
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

init();