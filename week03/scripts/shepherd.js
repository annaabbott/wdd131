const gridItems = document.querySelectorAll(".grid-item");

const sheepIndex = Math.floor(Math.random() * 3);

let attempts = 0;
const attemptsDisplay = document.getElementById("attempts");

gridItems.forEach((item, index) => {
  const sheepImg = document.createElement("img");
  sheepImg.src = "images/youngsung_kim_gentle_shepherd.webp";
  sheepImg.alt = "Gentle Shepherd";
  sheepImg.classList.add("hidden");

  const message = document.createElement("p");
  message.textContent = "The sheep is not hiding here. Keep looking!";
  message.classList.add("hidden");

  item.appendChild(index === sheepIndex ? sheepImg : message);

  item.addEventListener("click", () => {
    //increment attempts counter
    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`
    if (index === sheepIndex) {
      //reveal the sheep
      sheepImg.classList.remove("hidden");
    } else {
      //reveal the message
      message.classList.remove("hidden");
    }
    //disable further clicks for this item
    item.style.pointerEvents = "none";
  });
});
