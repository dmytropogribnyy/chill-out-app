const container = document.getElementById("container");
const pointer_container = document.getElementById("pointer-container");
const text = document.getElementById("text");
const totalTime = 8000;
const startbtn = document.getElementsById("startbtn");
const stopbtn = document.getElementById("stopbtn");

const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function animationStart() {
	pointer_container.style.animationPlayState = "running";
	breathAnimation();
}

function animationStop() {
	pointer_container.style.animationPlayState = "paused";
}

// breathAnimation();

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
