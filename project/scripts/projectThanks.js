const currentDate = new Date();
let currentYear = currentDate.getFullYear();

const modified = new Date(document.lastModified);

document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = modified;

const visitCount = document.querySelector(".myVisitCount");
let numVisits = Number(window.localStorage.getItem("myVisitCount")) || 0;
console.log(numVisits);
if (numVisits >= 1) {
  visitCount.textContent = `Glad to see you again!`;
}
