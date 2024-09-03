// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function (employeesArray) {
  // TODO: Get user input to create and return an array of employee objects
  const employeeFLS = []
  let addEmployee = true;
  
  while (addEmployee) {
    let firstPrompt = window.prompt("Enter employee's first name");
    let lastPrompt = window.prompt("Enter employee's last name");
    let salaryPrompt = window.prompt("Enter employee's salary (numerals only)");
    const employeeProfile = {
      firstName: firstPrompt,
      lastName: lastPrompt,
      salary: salaryPrompt,
    }
    employeeFLS.push(employeeProfile);
    addEmployee = window.confirm('Add another employee?');
  }
  return employeeFLS;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++ ) {
    totalSalary += Number(employeesArray[i].salary);
  }

  avgSalary = (totalSalary / employeesArray.length);
  console.log(`The average employee salary is $${avgSalary}.`)
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const index = Math.floor(Math.random() * employeesArray.length);
  console.log(`Congratulations! ${employeesArray[index].firstName} ${employeesArray[index].lastName} is the winner!`);
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
