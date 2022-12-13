const submitBtn = document.querySelector(".submit-btn");
const ratingCircles = document.querySelectorAll(".rating-circle");
const selectedRating = document.querySelector(".selected-rating");
const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thank-you");

let rating;

ratingCircles.forEach((circle) => {
	circle.addEventListener("click", (event) => {
		ratingCircles.forEach((rating) => {
			rating.classList.remove("selected");
		});
		circle.classList.add("selected");
		rating = event.target.getAttribute("value");
	});
});

submitBtn.addEventListener("click", () => {
	if (!rating) {
		alert("Please choose a rating");
	} else {
		ratingCard.style.display = "none";
		thankYouCard.style.display = "flex";
		selectedRating.textContent = `You selected ${rating} out of 5`;
	}
});
