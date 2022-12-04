const weatherBox = document.querySelector(".weather-box");
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "194ae63d2d9ec42b33b023282d927713";

deleteHidden(weatherBox);

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = weatherBox.querySelector("span:first-child");
			const city = weatherBox.querySelector("span:last-child");
			city.innerText = data.name;
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
		});
}
function onGeoError() {
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
