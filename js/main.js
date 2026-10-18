import { generateRandomArray } from "./arrayUtils.js";

const MIN_VALUE = 1;
const MAX_VALUE = 99;

const arena = document.getElementById("arena");
const arraySizeInput = document.getElementById("array-size");
const arraySizeOutput = document.getElementById("array-size-value");
const shuffleButton = document.getElementById("shuffle-button");

let state = [];

function getSelectedSize() {
	return Number(arraySizeInput.value);
}

function render(array, animate = false) {
	arena.replaceChildren();
	arena.style.setProperty("--count", String(array.length));
	arena.classList.toggle("is-entering", animate);

	for (const [index, value] of array.entries()) {
		const rise = (MAX_VALUE - MIN_VALUE === 0)
			? 0
			: (value - MIN_VALUE) / (MAX_VALUE - MIN_VALUE);

		const listItem = document.createElement("li");
		listItem.className = "bubble";
		listItem.textContent = String(value);
		listItem.style.setProperty("--rise", String(rise));
		listItem.style.setProperty("--i", String(index));
		arena.appendChild(listItem);
	}
}

function generateNewState(animate = false) {
	state = generateRandomArray(getSelectedSize(), MIN_VALUE, MAX_VALUE);
	render(state, animate);
}

function syncSizeLabel() {
	arraySizeOutput.textContent = String(arraySizeInput.value);
}

arraySizeInput.addEventListener("input", () => {
	syncSizeLabel();
	generateNewState(false);
});

shuffleButton.addEventListener("click", () => {
	generateNewState(true);
});

syncSizeLabel();
generateNewState(true);