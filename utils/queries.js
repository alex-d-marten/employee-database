// const db = require('../db/connection');

// // declare variables
// let departments = ['None'];
// let employeeArr = ['None'];
// let employeeIds = [];
// let roles = [];
// let roleInfo = [];
// let departmentName;
// let salaryAmount; 

// // run needed prep queries
// function runQueries() {
//     departments = ['None'];
//     roles = [];
//     employeeArr = ['None'];
//     employeeIds = [];

//     db.query(`SELECT department_name FROM departments;`, (err, res) => {
//         if(err) console.log(err);
//         res.forEach(element => departments.push(element.department_name));
//     })
    
//     // query to retrieve roles 
//     db.query(`SELECT job_title FROM roles;`, (err, res) => {
//         if(err) console.log(err);
//         res.forEach(element => roles.push(element.job_title));
//     })
    
//     // query to retrieve role info to be used to match salaries and departments
//     db.query(`SELECT job_title, department_name, salary FROM roles`, (err, res) => {
//         if(err) console.log(err);
//         roleInfo = res;
//     })
    
//     // query to retrieve employees
//     db.query(`SELECT employee_id, first_name, last_name FROM employees;`, (err, res) => {
//         if(err) console.log(err);
//         res.forEach(element => employeeArr.push(element.first_name + ' ' + element.last_name));
//         employeeIds = res;
//     })
    
// }

// module.exports = runQueries;