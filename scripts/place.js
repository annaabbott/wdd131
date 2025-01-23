const currentDate = new Date();
let currentYear = currentDate.getFullYear();

const modified = new Date(document.lastModified);

const temp = 35;
const windSpeed = 8;

document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = modified;

function calcWindChill(temp, windSpeed) {
  windChill =
    35.74 +
    0.6215 * temp -
    35.75 * windSpeed ** 0.16 +
    0.4275 * temp * windSpeed ** 0.16;
  roundedWindChill = parseFloat(windChill.toFixed(1));
  return roundedWindChill;
}

if (temp <= 50 && windSpeed > 3) {
  document.querySelector("#windChill").textContent = `${calcWindChill(
    temp,
    windSpeed
  )} °F`;
}
