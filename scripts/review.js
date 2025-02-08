const reviewCount = document.querySelector(".reviewCount");
let numReviews = Number(window.localStorage.getItem("myReviewCount")) || 0;
console.log(numReviews);
reviewCount.textContent = numReviews;
