const currentDate = new Date();
let currentYear = currentDate.getFullYear();

const modified = new Date(document.lastModified);

document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = modified;

console.log("javascript loaded")

let numVisits = Number(window.localStorage.getItem("myVisitCount")) || 0;
console.log(numVisits);
numVisits++;
localStorage.setItem("myVisitCount", numVisits);
