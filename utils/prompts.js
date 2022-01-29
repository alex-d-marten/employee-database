const inquirer = require('inquirer');

const initPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'initPrompt',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ]);
};

module.exports = initPrompt;