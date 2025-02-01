const currentDate = new Date();
let currentYear = currentDate.getFullYear();

const modified = new Date(document.lastModified);

document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = modified;

const verticalNav = document.querySelector(".navContainer");
verticalNav.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("element clicked:", e.target.id);
  verticalNav.classList.remove("visible");
});

const hamburgerBtn = document.querySelector(".hamburger");
hamburgerBtn.addEventListener("click", () => {
  verticalNav.classList.add("visible");
});

const closeBtn = document.querySelector(".closeBox");
closeBtn.addEventListener("click", () => {
  verticalNav.classList.remove("visible");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Add more temple objects here...
  {
    //temple1
    templeName: "Madrid Spain Temple",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19",
    area: 45800,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/400x250/madrid-spain-mormon-temple-902157-wallpaper.jpg",
  },
  {
    //temple2
    templeName: "Houston Texas Temple",
    location: "Houston, Texas",
    dedicated: "2000, August, 26",
    area: 33970,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/houston-texas/2018/400x250/houston-temple02.jpg",
  },
  {
    //temple3
    templeName: "Dallas Texas Temple",
    location: "Dallas, Texas",
    dedicated: "1984, October, 19",
    area: 44207,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/dallas-texas/400x250/dallas-temple-lds-1048888-wallpaper.jpg",
  },
];

function createTempleCard(temple) {
  const mainContainer = document.querySelector("#mainContainer");
  const card = document.createElement("div");
  mainContainer.appendChild(card);
  const templeh2 = document.createElement("h2");
  templeh2.innerText = temple.templeName;
  card.appendChild(templeh2);
  const locationp = document.createElement("p");
  locationp.innerText = `Location: ${temple.location}`;
  templeh2.appendChild(locationp);
  const dedicatedp = document.createElement("p");
  dedicatedp.innerText = `Dedicated: ${temple.dedicated}`;
  locationp.appendChild(dedicatedp);
  const areap = document.createElement("p");
  areap.innerText = `Size: ${temple.area} square feet`;
  dedicatedp.appendChild(areap);
  const templefig = document.createElement("figure");
  areap.appendChild(templefig);
  const templeImg = document.createElement("img");
  templeImg.setAttribute("src", temple.imageUrl);
  templeImg.setAttribute("alt", temple.templeName);
  templeImg.setAttribute("loading", "lazy");
  templefig.appendChild(templeImg);
}

function showTemples(filterfunc) {
  const mainContainer = document.querySelector("#mainContainer");
  mainContainer.innerText = "";
  temples.filter(filterfunc).forEach((temple) => createTempleCard(temple));
}

function showAll(temple) {
  return true;
}

function showOld(temple) {
  const yeardedicated = temple.dedicated.substring(0, 4);
  return yeardedicated <= "1900";
}

function showNew(temple) {
  const yeardedicated = temple.dedicated.substring(0, 4);
  return yeardedicated >= "2000";
}

function showSmall(temple) {
  return temple.area <= 10000;
}

function showLarge(temple) {
  return temple.area >= 90000;
}

homeAnchor = document.querySelector("#menu-home");
oldAnchor = document.querySelector("#menu-old");
newAnchor = document.querySelector("#menu-new");
largeAnchor = document.querySelector("#menu-large");
smallAnchor = document.querySelector("#menu-small");

homeAnchor.addEventListener("click", () => {
  showTemples(showAll);
});
oldAnchor.addEventListener("click", () => {
  showTemples(showOld);
});
newAnchor.addEventListener("click", () => {
  showTemples(showNew);
});
largeAnchor.addEventListener("click", () => {
  showTemples(showLarge);
});
filteredSmall = smallAnchor.addEventListener("click", () => {
  showTemples(showSmall);
});

showTemples(showAll);
