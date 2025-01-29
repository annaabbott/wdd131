// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTh",
      instructor: "Sis A",
    },
  ],
  //   Complete the enrollStudent method. It should find the section that was given in this.sections.
  enrollStudent: function (sectionNum) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
    }
  },
  // Create another method called dropStudent(section). Subtract 1 from enrolled if the section passed in is found.
  dropStudent: function (sectionNum) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled--;
      renderSections(this.sections);
    }
  },
};
// Create a function to set the name and number of the course in the HTML. Pass the course object into your function (remember that you can use the dot notation to access the parts of an object.)
function setCourseInfo(course) {
  const courseName = document.querySelector("#courseName");
  const courseCode = document.querySelector("#courseCode");
  courseName.textContent = course.name;
  courseCode.textContent = course.code;
}
// Create another function that will output the sections into the table identified by #sections. You should pass the sections you want rendered into the function.
function sectionTemplate(section) {
  return `<tr>
    <td> ${section.sectionNum}</td>
    <td> ${section.roomNum}</td>
    <td> ${section.enrolled}</td>
    <td> ${section.days}<td>
    <td> ${section.instructor}</td>
    </tr>`;
}

function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections").innerHTML = html.join("");
}

// Add two event listeners to your code. One for the #enrollStudent button that will call out enrollStudent method, and another for the #dropStudent button. The event handler function in each case should grab the contents of the #sectionNumber input and pass it into the appropriate function.
document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
  });
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
  });
setCourseInfo(aCourse);
renderSections(aCourse.sections);
