const container = document.getElementById("container");
const pointerContainer = document.getElementById("pointer-container");
const text = document.getElementById("text");
const totalTime = 8000;
const startbtn = document.querySelector("startbtn");
const stopbtn = document.querySelector("stopbtn");

const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

pointerContainer.style.animationPlayState = "paused";

startbtn.addEventListener("click", animationStart);
stopbtn.addEventListener("click", animationStop);

var breath;
var holdTimeout;
var breathOut;

function animationStart() {
	breathAnimation();
	breath = setInterval(breathAnimation, totalTime);

	setTimeout(() => {
		pointerContainer.style.animation = "";
	}, 150);
}

function animationStop() {
	pointerContainer.style.animation = "none";
	container.className = "container";
	clearInterval(breath);
	clearTimeout(holdTimeout);
	clearTimeout(breathOut);
	text.innerText = "";
}

function breathAnimation() {
	if (animationStart) {
		text.innerText = "Breathe In";
		container.className = "container grow";

		holdTimeout = setTimeout(() => {
			text.innerText = "Hold";
			breathOut = setTimeout(() => {
				text.innerText = "Breathe Out";
				container.className = "container shrink";
			}, holdTime);
		}, breathTime);
	} else if (animationStop) {
		return;
	}
}
