//This will be use to reset the form
const form = document.querySelector("form");

const additionalCourses = {
  4800: "WMDD 4800 - Graphic Design",
  4811: "WMDD 4811 - Graphic Design Fundamentals",
};

const courses = {
  4815: "WMDD 4815",
  4820: "WMDD 4820",
  4950: "WMDD 4950",
  ...additionalCourses,
};

let students = [];

const formSubmit = (e) => {
  e.preventDefault();

  //resets the table
  content.innerHTML = "";

  const name = studentName.value;
  const id = studentID.value;
  const grade = studentGrade.value;
  const courseValue = course.value;

  students.push({
    course: courses[courseValue],
    name,
    id,
    grade,
  });

  //reset the form
  form.reset();

  studentName.focus();

  drawTable();
};

const drawTable = () => {
  for (student of students) {
    let row = "";

    for (prop in student) {
      row += `<td>${student[prop]}</td>`;
    }

    row = `<tr>${row}</tr>`;

    content.innerHTML += row;
  }
};

//Adding additonal courses to the select
for (key in additionalCourses) {
  const option = document.createElement("option");
  option.text = additionalCourses[key];
  option.value = key;

  course.add(option);
}

//Event Listener For Submit
addData.addEventListener("click", formSubmit);
