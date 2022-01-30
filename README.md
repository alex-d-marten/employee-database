# employee-database

## Description

This project is a command line application that allows a user to create and manage an employee database. The project utilizies Inquirer, Node.js, MySQL2, and the console.table package from npm. In the employee database there are three tables: Departments, Roles, and Employees. The tables are linked via a foreign key and information is populated to the user through the command line by using the foreign keys and various JOIN statements. This project is not considered a finished product but rather an MVP and is actively being worked on.

---

## Table of contents

* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)

---

## Installation

To install this project first and foremotst you will need to have Node.js installed on your computer. Then you can download/clone the repository to your device. In the command line, navigate to the root directory of the project and run "npm install" to install the necessary packages. You are now almost ready but we need to take care of the MySQL credentials and setup first. If you do not have MySQL installed then please install this before proceeding. At your terminal and in the root directory of the project launch a mysql shell. Run "source db/db.sql", "source db/schema.sql" and "source db/seeds.sql" to setup the database with some template data. Now we need to add in the MySQL credentials to the application so when we run it then we can connect to the database. In the .env.EXAMPLE file edit the "DB_NAME" to be equal to "employees" and then fill in "DB_USER" and "DB_PW" with your MySQL credentials. Lastly, change the name of the file to .env. With this all set up, run "node index.js" from the root of the project to launch the application.

---

## Usage

To use the project simply run "node index.js" from the command line, after the installation has been done. To exit the app at any time just hit Ctrl + C. The intended use of this project is to build and emprove employee databases.

---

## Walkthrough Video
[how to run the app](https://drive.google.com/file/d/15GE-lRPIHhql6_xIpdYdC-GAZ5p_TO0u/view?usp=sharing)

---

## Questions

If you have any questions about the project listed here or myself in general please contact me at alexdmarten@gmail.com. I will get back to you as soon as possible, thanks!

Interested in any of my other projects? Check out my github [alex-d-marten](https://github.com/alex-d-marten)

---