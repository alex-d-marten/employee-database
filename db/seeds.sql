INSERT INTO departments (department_id, department_name)
VALUES
    (1, 'Technology'),
    (2, 'Development'),
    (3, 'Finance'),
    (4, 'Human Resources');

INSERT INTO roles (role_id, job_title, salary, department_name)
VALUES
    (1, 'Chief Technology Officer', 500000, 'Technology'),
    (2, 'Chief Development Officer', 300000, 'Development'),
    (3, 'Chief Finance Officer', 500000, 'Finance'),
    (4, 'Chief People Officer', 250000, 'Human Resources');

INSERT INTO employees (employee_id, first_name, last_name, job_title, department_name, salary, managers)
VALUES
    (1, 'Alex', 'Marten', 'Chief Technology Officer', 'Technology', 500000, 'None'),
    (2, 'Jamie', 'Sunds', 'Chief Development Officer', 'Development', 300000, 'Alex'),
    (3, 'Ena', 'Roberts', 'Chief Finance Officer', 'Finance', 500000, 'Alex'),
    (4, 'Judith', 'Edwards', 'Chief People Officer', 'Human Resources', 250000, 'Alex');