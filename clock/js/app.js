const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

const formatTime = (tail) => {
	if (tail < 10) {
		return "0" + tail;
	} else {
		return tail;
	}
};

const actualTime = () => {
	let time = new Date();
	let hours = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();

	hour.innerHTML = formatTime(hours);
	minute.innerHTML = formatTime(minutes);
	second.innerHTML = formatTime(seconds);
	requestAnimationFrame(actualTime);
};

document.addEventListener("DOMContentLoaded", () => {
	actualTime();
});
