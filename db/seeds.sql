INSERT INTO departments
VALUES
    (DEFAULT, 'Technology'),
    (DEFAULT, 'Development'),
    (DEFAULT, 'Finance'),
    (DEFAULT, 'Human Resources');

INSERT INTO roles (role_id, job_title, salary, department_id)
VALUES
    (DEFAULT, 'Chief Technology Officer', 500000, 1),
    (DEFAULT, 'Chief Development Officer', 300000, 2),
    (DEFAULT, 'Chief Finance Officer', 500000, 3),
    (DEFAULT, 'Chief People Officer', 250000, 4);

INSERT INTO employees (employee_id, first_name, last_name, role_id, manager_id)
VALUES
    (DEFAULT, 'Alex', 'Marten', 1, null),
    (DEFAULT, 'Jamie', 'Sunds', 2, 1),
    (DEFAULT, 'Ena', 'Roberts', 3, 1),
    (DEFAULT, 'Judith', 'Edwards', 4, 1);



    -- INSERT INTO employees (employee_id, first_name, last_name, job_title, department_name, salary, manager)