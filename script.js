const container = document.getElementById("container");
const pointer_container = document.getElementById("pointer-container");
const text = document.getElementById("text");
const totalTime = 8000;
const startbtn = document.querySelector("startbtn");
const stopbtn = document.querySelector("stopbtn");

const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// breathAnimation();
// setInterval(breathAnimation, totalTime);
pointer_container.style.animationPlayState = "paused";

function animationStart() {
	pointer_container.style.animationPlayState = "running";
}

function animationStop() {
	pointer_container.style.animationPlayState = "paused";
}

startbtn.addEventListener("click", animationStart);
stopbtn.addEventListener("click", animationStop);

function breathAnimation() {
	text.innerText = "Breathe In";
	container.className = "container grow";

	setTimeout(() => {
		text.innerText = "Hold";
		setTimeout(() => {
			text.innerText = "Breathe Out";
			container.className = "container shrink";
		}, holdTime);
	}, breathTime);
}

setInterval(breathAnimation, totalTime);
