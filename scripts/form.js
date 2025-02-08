const currentDate = new Date();
let currentYear = currentDate.getFullYear();

const modified = new Date(document.lastModified);

document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = modified;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

const productName = document.querySelector("#productName");
const selectFluxCapacitor = document.createElement("option");
productName.appendChild(selectFluxCapacitor);
selectFluxCapacitor.innerText =
  products[0].name.charAt(0).toUpperCase() + products[0].name.slice(1);
selectFluxCapacitor.setAttribute("value", products[0].name);
const selectPowerLaces = document.createElement("option");
productName.appendChild(selectPowerLaces);
selectPowerLaces.innerText =
  products[1].name.charAt(0).toUpperCase() + products[1].name.slice(1);
selectPowerLaces.setAttribute("value", products[1].name);
const selectTimeCircuits = document.createElement("option");
productName.appendChild(selectTimeCircuits);
selectTimeCircuits.innerText =
  products[2].name.charAt(0).toUpperCase() + products[2].name.slice(1);
selectTimeCircuits.setAttribute("value", products[2].name);
const selectLowVoltageReactor = document.createElement("option");
productName.appendChild(selectLowVoltageReactor);
selectLowVoltageReactor.innerText =
  products[3].name.charAt(0).toUpperCase() + products[3].name.slice(1);
selectLowVoltageReactor.setAttribute("value", products[3].name);
const selectWarpEqualizer = document.createElement("option");
productName.appendChild(selectWarpEqualizer);
selectWarpEqualizer.innerText =
  products[4].name.charAt(0).toUpperCase() + products[4].name.slice(1);
selectWarpEqualizer.setAttribute("value", products[4].name);

let numReviews = Number(window.localStorage.getItem("myReviewCount")) || 0;
console.log(numReviews);
numReviews++;
localStorage.setItem("myReviewCount", numReviews);

