console.log("hello world");
const currentDate = new Date();
let currentYear = currentDate.getFullYear();

const modified = new Date(document.lastModified);

document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = modified;

const artwork = [
  {
    title: "Orangy",
    medium: "Digital Illustration",
    canvas: "Sticker Paper",
    size: "4x5",
    imageUrl: "../images/artwork1-resized.jpg",
  },
  {
    title: "Bride",
    medium: "Digital Illustration",
    canvas: "Art Paper",
    size: "8x10",
    imageUrl: "../images/artwork2-resized.jpg",
  },
  {
    title: "The Gym Trainer",
    medium: "Digital Illustration",
    canvas: "Digital Wallpaper",
    size: "mobile",
    imageUrl: "../images/artwork3-resized.jpg",
  },
  {
    title: "Tag Team Loriah",
    medium: "Digital Illustration",
    canvas: "Cardstock",
    size: "3x5",
    imageUrl: "../images/artwork4-resized.jpg",
  },
  {
    title: "The Ukulele Singer",
    medium: "Digital Illustration",
    canvas: "Sticker Paper",
    size: "4x5",
    imageUrl: "../images/artwork5-resized.jpg",
  },
  {
    title: "Eliza and Steve",
    medium: "colored pencil",
    canvas: "canvas",
    size: "8x10",
    imageUrl: "../images/artwork7-resized.jpg",
  },
  {
    title: "Tom and Anna",
    medium: "colored pencil",
    canvas: "canvas",
    size: "12x14",
    imageUrl: "../images/artwork8-resized.jpg",
  },
  {
    title: "Chibi Sailors",
    medium: "Digital Illustration",
    canvas: "canvas",
    size: "4x5",
    imageUrl: "../images/artwork9-resized.jpg",
  },
  {
    title: "Dragonball 1",
    medium: "Digital Illustration",
    canvas: "canvas",
    size: "4x5",
    imageUrl: "../images/artwork11-resized.jpg",
  },
  {
    title: "Dragonball 2",
    medium: "Digital Illustration",
    canvas: "canvas",
    size: "4x5",
    imageUrl: "../images/artwork12-resized.jpg",
  },
];

function createArtCard(artwork) {
  const mainContainer = document.querySelector("#mainContainer");
  const card = document.createElement("div");
  mainContainer.appendChild(card);
  const artworkh2 = document.createElement("h2");
  artworkh2.innerText = artwork.title;
  card.appendChild(artworkh2);
  const artworkMedium = document.createElement("p");
  card.innerText = `Medium: ${artwork.medium}`;
  artworkh2.appendChild(artworkMedium);
  const artworkCanvas = document.createElement("p");
  artworkCanvas.innerText = `Canvas: ${artwork.canvas}`;
  card.appendChild(artworkCanvas);
  const artworkSize = document.createElement("p");
  artworkSize.innerText = `Size: ${artwork.size}`;
  card.appendChild(artworkSize);
  const artworkFig = document.createElement("figure");
  card.appendChild(artworkFig);
  const artworkImg = document.createElement("img");
  artworkImg.setAttribute("src", artwork.imageUrl);
  artworkImg.setAttribute("alt", artwork.title);
  artworkImg.setAttribute("loading", "lazy");
  artworkFig.appendChild(artworkImg);
}

function showArtwork(filterfunc) {
  const mainContainer = document.querySelector("#mainContainer");
  mainContainer.innerText = "";
  artwork.filter(filterfunc).forEach((artwork) => createArtCard(artwork));
}

function showAll(artwork) {
  return true;
}

function showDigital(artwork) {
  return artwork.medium == "Digital Illustration";
}

function showTraditional(artwork) {
  const yeardedicated = temple.dedicated.substring(0, 4);
  return artwork.medium !== "Digital Illustration";
}

// function showSmall(temple) {
//   return temple.area <= 10000;
// }

// function showLarge(temple) {
//   return temple.area >= 90000;
// }

allAnchor = document.querySelector("#portfolio-all");
digitalAnchor = document.querySelector("portfolio-digital");
traditionalAnchor = document.querySelector("#portfolio-traditional");
// largeAnchor = document.querySelector("#menu-large");
// smallAnchor = document.querySelector("#menu-small");

allAnchor.addEventListener("click", () => {
  showArtwork(showAll);
});
digitalAnchor.addEventListener("click", () => {
  showArtwork(showDigital);
});
traditionalAnchor.addEventListener("click", () => {
  showArtwork(showTraditional);
});
// largeAnchor.addEventListener("click", () => {
//     showArtwork(showLarge);
// });
// filteredSmall = smallAnchor.addEventListener("click", () => {
//     showArtwork(showSmall);
// });

console.log("hello world and goodbye");
createArtCard(artwork);
