
const output = document.getElementById("output");

// 1. Create an array containing 5 employees
let employees = [
  "Arun Kumar",
  "Meera Nair",
  "Rahul Das",
  "Priya Menon",
  "Anjali Thomas"
];

// Helper function to display results on the webpage
function addHeading(text) {
  const heading = document.createElement("h3");
  heading.textContent = text;
  output.appendChild(heading);
}

function addResult(label, value) {
  const paragraph = document.createElement("p");
  paragraph.className = "result-item";

  const strong = document.createElement("strong");
  strong.textContent = `${label}: `;

  paragraph.appendChild(strong);
  paragraph.appendChild(document.createTextNode(String(value)));
  output.appendChild(paragraph);
}

function addEmployeeList(list) {
  const ul = document.createElement("ul");

  for (const employee of list) {
    const li = document.createElement("li");
    li.textContent = employee;
    ul.appendChild(li);
  }

  output.appendChild(ul);
}

// 2. Display total employees and complete employee list
addHeading("1. Initial Employee Directory");
addResult("Total Employees", employees.length);
addEmployeeList(employees);

// 3. Add a new employee to the end using push()
employees.push("Vishnu Raj");

addHeading("2. After Adding Employee to the End");
addResult("Updated Total", employees.length);
addEmployeeList(employees);

// 4. Add a new employee to the beginning using unshift()
employees.unshift("Sneha Pillai");

addHeading("3. After Adding Employee to the Beginning");
addResult("Updated Total", employees.length);
addEmployeeList(employees);

// 5. Remove the last employee using pop()
const removedLastEmployee = employees.pop();

addHeading("4. Remove Last Employee");
addResult("Removed Employee", removedLastEmployee);
addEmployeeList(employees);

// 6. Remove the first employee using shift()
const removedFirstEmployee = employees.shift();

addHeading("5. Remove First Employee");
addResult("Removed Employee", removedFirstEmployee);
addEmployeeList(employees);

// 7. Find the index of a given employee using indexOf()
const searchName = "Rahul Das";
const employeeIndex = employees.indexOf(searchName);

addHeading("6. Find Employee Index");
addResult("Employee Name", searchName);
addResult("Index (starts at 0)", employeeIndex);

// 8. Check whether an employee exists using includes()
const checkName = "Priya Menon";
const employeeExists = employees.includes(checkName);

addHeading("7. Check Employee Existence");
addResult("Employee Name", checkName);
addResult("Exists in Directory", employeeExists);


 // 9. Create a department array and combine it with employees
const departments = [
  "Human Resources",
  "Finance",
  "Engineering"
];

const combinedDirectory = employees.concat(departments);

addHeading("8. Combine Employees and Departments");
addResult("Combined Total", combinedDirectory.length);
addEmployeeList(combinedDirectory);

// 10. Join employee names into one string
const employeeString = employees.join(" | ");

addHeading("9. Employee Names as a String");
addResult("Joined Names", employeeString);

// 11. Display employees from the 2nd to 4th positions
// slice() does not change the original array
const selectedEmployees = employees.slice(1, 4);

addHeading("10. Employees from 2nd to 4th Positions");
addEmployeeList(selectedEmployees);

// 12. Replace the employee at the 3rd position using splice()
const removedEmployee = employees.splice(2, 1, "Kiran Shah");

addHeading("11. Replace the 3rd Employee");
addResult("Replaced Employee", removedEmployee[0]);
addResult("Replacement", "Kiran Shah");
addEmployeeList(employees);

// 13. Sort employees alphabetically
employees.sort();

addHeading("12. Employees Sorted Alphabetically");
addEmployeeList(employees);

// 14. Reverse the employee order
employees.reverse();

addHeading("13. Employees in Reverse Order");
addEmployeeList(employees);
