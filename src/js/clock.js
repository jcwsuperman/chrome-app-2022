const clockBox = document.querySelector(".clock-box");
const clock = document.querySelector("#clock");
const calendar = document.querySelector("#calendar");

deleteHidden(clockBox);

function getClock() {
	const currentTime = new Date();
	const year = currentTime.getFullYear();
	const month = currentTime.getMonth();
	const date = currentTime.getDate();
	const weekend = [`일`, `월`, `화`, `수`, `목`, `금`, `토`];
	const day = weekend[currentTime.getDay()];
	const hours = String(currentTime.getHours()).padStart(2, "0");
	const minutes = String(currentTime.getMinutes()).padStart(2, "0");
	const seconds = String(currentTime.getSeconds()).padStart(2, "0");
	clock.innerText = `${hours}:${minutes}:${seconds}`;
	calendar.innerText = `${year}-${month}-${date} (${day})`;
}

getClock();
setInterval(getClock, 500);
