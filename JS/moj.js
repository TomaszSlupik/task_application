const button = document.querySelector(".button");
const numberlist = document.querySelector(".numberlist");
const btn1 = document.querySelector(".editOne");
let add;
let errorInfo;
let listTask;
let newTask;
let finalEdit;
let finalOne;
let finalTwo;
let finalThree;
let finalFour;
let finalNone;

const main = () => {
	domElements();
	domEvents();
};

const domElements = () => {
	input = document.querySelector(".form-control");
	add = document.querySelector(".btn btn-outline-success");
	errorInfo = document.querySelector(".error");
	listDone = document.querySelector(".listDone");

	finalEdit = document.querySelector(".finalEdit");
	finalOne = document.querySelector(".finalOne");
	finalTwo = document.querySelector(".finalTwo");
	finalThree = document.querySelector(".finalThree");
	finalFour = document.querySelector(".finalFour");
	finalNone = document.querySelector(".finalNone");
	finalFourDelete = document.querySelector(".finalFourDelete");
	finalDelete = document.querySelector(".finalDelete");
	finalThreeDelete = document.querySelector(".finalThreeDelete");
};

const domEvents = () => {
	button.addEventListener("click", addTask);
	listDone.addEventListener("click", trueOne);
	finalFour.addEventListener("click", closeTask);
	finalThree.addEventListener("click", TrueTask);
	finalFourDelete.addEventListener("click", closed);
	finalThreeDelete.addEventListener("click", deletedall);
	input.addEventListener("keyup", enterKey);
};

document.addEventListener("DOMContentLoaded", main);

const addTask = () => {
	if (input.value !== "") {
		newTask = document.createElement("li");
		newTask.setAttribute(
			"class",
			"list-group-item d-flex justify-content-between align-items-center"
		);
		newTask.textContent = input.value;
		numberlist.append(newTask);
		create();

		input.value = "";
		errorInfo.textContent = "";
	} else {
		errorInfo.textContent = "Wpisz treść zadnia!";
	}
};

const create = () => {
	const div = document.createElement("div");
	numberlist.append(div);
	div.setAttribute("class", "items");
	const done = document.querySelector(".done");
	div.setAttribute("class", done);
	newTask.append(div);

	const iOne = document.createElement("i");
	div.append(iOne);
	iOne.setAttribute("class", "fa-solid fa-check completed");

	const iTwo = document.createElement("i");
	div.append(iTwo);
	iTwo.setAttribute("class", "fa-solid fa-pen-to-square edit");

	const iThree = document.createElement("i");
	div.append(iThree);
	iThree.setAttribute("class", "fa-solid fa-trash-can deleted");
};

const trueOne = (e) => {
	if (e.target.matches(".completed")) {
		const done = document.querySelector(".done");
		e.target.closest("li").classList.toggle("done");
		console.log(`completed`);
	} else if (e.target.matches(".edit")) {
		editTask(e);
		console.log(`edit`);
	} else if (e.target.matches(".deleted")) {
		console.log(`deleted`);
		deletedTask(e);
	}
};

const editTask = (e) => {
	finalThree = e.target.closest("li");
	finalTwo.value = finalThree.firstChild.textContent;

	finalNone.style.display = "inline-block";
};

const closeTask = () => {
	finalEdit.style.display = "none";
};

const closed = () => {
	finalDelete.style.display = "none";
};

const TrueTask = () => {
	if (finalTwo.value !== "") {
		finalThree.firstChild.textContent = finalTwo.value;
		finalEdit.style.display = "none";
	}
};

const deletedTask = (e) => {
	const finalDelete = document.querySelector(".finalDelete");
	finalDelete.style.display = "inline-block";
};

const deletedall = () => {
	finalDelete.style.display = "none";
	const li = document.querySelector("li:last-child");
	li.remove();
};

const enterKey = (e) => {
	if (e.key === "Enter") {
		addTask();
	}
};
document.addEventListener("DOMContentLoaded", main);
