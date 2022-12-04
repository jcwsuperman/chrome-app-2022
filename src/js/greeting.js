const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const wellcomeBox = document.querySelector(".wellcome-box");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function logout() {
	localStorage.removeItem(USERNAME_KEY);
	window.location.reload();
}

function paintWellcome(savedUsername) {
	wellcomeBox.classList.remove(HIDDEN_CLASSNAME);
	const wellcome = document.createElement("h2");
	wellcome.classList.add("wellcome");
	wellcome.innerText = `좋은 하루 보내세요 ${savedUsername}님.`;
	wellcomeBox.appendChild(wellcome);

	const logoutBtn = document.createElement("button");
	logoutBtn.classList.add("logout-btn");
	logoutBtn.innerText = "로그아웃";
	logoutBtn.addEventListener("click", logout);
	wellcomeBox.appendChild(logoutBtn);
}

function paintGreeting(username) {
	greeting.innerText = `어서오세요 ${username} 님`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
	setTimeout(() => greeting.classList.add(HIDDEN_CLASSNAME), 3000);
}

function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreeting(username);
	setTimeout(() => paintWellcome(username), 3100);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	paintWellcome(savedUsername);
}

//---------------hidden 삭제 펑션-------------//

function timeOutHidden(boxName) {
	setTimeout(() => boxName.classList.remove(HIDDEN_CLASSNAME), 3100);
}

function deleteHidden(boxName) {
	if (savedUsername === null) {
		loginForm.addEventListener("submit", () => timeOutHidden(boxName));
	} else if (savedUsername !== null) {
		boxName.classList.remove(HIDDEN_CLASSNAME);
	}
}
