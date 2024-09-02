// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = {
  firstName: [],
  lastName: [],
  salary: [],
}

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let addEmployee = true;
  
  while (addEmployee) {
    let firstPrompt = window.prompt("Enter employee's first name");
    if (!firstPrompt) {
      return;
    } else {
      employeesArray.firstName.push(firstPrompt);
    };
    let lastPrompt = window.prompt("Enter employee's last name");
    if (!lastPrompt) {
      return;
    } else {
      employeesArray.lastName.push(lastPrompt);
    };
    let salaryPrompt = window.prompt("Enter employee's salary (numerals only)");
    if (!salaryPrompt) {
      return;
    } else {
      employeesArray.salary.push(salaryPrompt);
    };
    addEmployee = window.confirm('Add another employee?');
  }
};

// Display the average salary
const displayAverageSalary = function () {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  for (let i = 0; i < employeesArray.salary.length; i++ ) {
    totalSalary += Number(employeesArray.salary[i]);
  }

  avgSalary = (totalSalary / employeesArray.salary.length);
  console.log(`The average employee salary is $${avgSalary}.`)
};

// Select a random employee
const getRandomEmployee = function () {
  // TODO: Select and display a random employee
  const index = Math.floor(Math.random() * employeesArray.firstName.length);
  console.log(`Congratulations! ${employeesArray.firstName[index]} ${employeesArray.lastName[index]} is the winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
