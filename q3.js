// Get the form, table, and hidden form elements
const studentForm = document.getElementById('student-form');
const studentTable = document.getElementById('student-table');
const hiddenForm = document.getElementById('hidden-form');
const cancelButton = document.getElementById('cancel-button');

let students = []; // Array to store student details

// Add event listener to the form submit event
studentForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get the input values
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const grade = document.getElementById('grade').value;

  // Create a new student object
  const student = {
    name: name,
    age: age,
    grade: grade
  };

  // Add the student to the array
  students.push(student);

  // Update the table
  updateTable();

  // Reset the form
  studentForm.reset();
});

// Function to update the table
function updateTable() {
  // Clear the table body
  studentTable.querySelector('tbody').innerHTML = '';

  // Loop through the students array and add rows to the table
  students.forEach(function (student, index) {
    const row = document.createElement('tr');

    // Create table cells for student details
    const nameCell = document.createElement('td');
    nameCell.textContent = student.name;

    const ageCell = document.createElement('td');
    ageCell.textContent = student.age;

    const gradeCell = document.createElement('td');
    gradeCell.textContent = student.grade;

    // Create table cell for action buttons
    const actionsCell = document.createElement('td');

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      deleteStudent(index);
    });

    // Create edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function () {
      showHiddenForm(index);
    });

    // Append buttons to actions cell
    actionsCell.appendChild(deleteButton);
    actionsCell.appendChild(editButton);

    // Append cells to the row
    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(gradeCell);
    row.appendChild(actionsCell);

    // Append row to the table body
    studentTable.querySelector('tbody').appendChild(row);
  });
}

// Function to delete a student
function deleteStudent(index) {
  students.splice(index, 1); // Remove student from the array
  updateTable(); // Update the table
}

// Function to show the hidden form with student details
function showHiddenForm(index) {
  const student = students[index]; // Get the student object

  // Fill the hidden form with student details
  document.getElementById('hidden-index').value = index;
  document.getElementById('hidden-name').value = student.name;
  document.getElementById('hidden-age').value = student.age;
  document.getElementById('hidden-grade').value = student.grade;

  // Show the hidden form
  hiddenForm.style.display = 'block';
}

// Add event listener to the hidden form submit event
hiddenForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const index = document.getElementById('hidden-index').value; // Get the index
  const student = students[index]; // Get the student object

  // Update the student details
  student.name = document.getElementById('hidden-name').value;
  student.age = document.getElementById('hidden-age').value;
  student.grade = document.getElementById('hidden-grade').value;

  //

// Hide the hidden form
hiddenForm.style.display = 'none';

// Update the table
updateTable();
});

// Add event listener to the cancel button
cancelButton.addEventListener('click', function () {
// Hide the hidden form
hiddenForm.style.display = 'none';
});







