const container = document.getElementById("container");
const text = document.getElementById("text");
const totalTime = 8000;

const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// console.log(breathTime, holdTime);

breathAnimation();

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
