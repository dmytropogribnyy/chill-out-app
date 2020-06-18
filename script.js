const container = document.getElementById("container");
const pointerContainer = document.getElementById("pointer-container");
const text = document.getElementById("text");
const totalTime = 8000;
const startbtn = document.querySelector("startbtn");
const stopbtn = document.querySelector("stopbtn");

const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// breathAnimation();
// setInterval(breathAnimation, totalTime);
pointerContainer.style.animationPlayState = "paused";

function animationStart() {
	pointerContainer.style.animationPlayState = "running";
	breathAnimation();
}

function animationStop() {
	pointerContainer.style.animationPlayState = "paused";
	pointerContainer.style.animationFillMode = "none";
	clearInterval(breathAnimation);
}

startbtn.addEventListener("click", animationStart);
stopbtn.addEventListener("click", animationStop);

function breathAnimation() {
	if (animationStart) {
		text.innerText = "Breathe In";
		container.className = "container grow";

		setTimeout(() => {
			text.innerText = "Hold";
			setTimeout(() => {
				text.innerText = "Breathe Out";
				container.className = "container shrink";
			}, holdTime);
		}, breathTime);
	} else return;
}
setInterval(breathAnimation, totalTime);
setTimeout(breathAnimation);
