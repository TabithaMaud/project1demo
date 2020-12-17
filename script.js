const towers = document.querySelectorAll('.tower');
const tower1Btn = document.querySelector('#tower1btn');
const tower2Btn = document.querySelector('#tower2btn');
const tower3Btn = document.querySelector('#tower3btn');

const tower1Discs = document.querySelectorAll('.tower1');
const tower2Discs = document.querySelectorAll('.tower2');
const tower3Discs = document.querySelectorAll('.tower3');

const tower1 = [1, 2, 3];
const tower2 = [];
const tower3 = [];
let currentChoice = 1;

const moveToOne = (event) => {
	console.log(event.target.id);
};

const moveToTwo = (event) => {
	if (currentChoice === '1') {
		if (tower2.length < 1 || tower1[0] < tower2[0]) {
			tower2.unshift(tower1[0]);
			tower1.shift();
		}
	} else {
		if (tower2.length < 1 || tower3[0] < tower2[0]) {
			tower2.unshift(tower3[0]);
			tower3.shift();
		}
	}
	// console.log(tower1, tower2, tower3);
};

towers.forEach((tower) => {
	tower.addEventListener('click', (event) => {
		currentChoice =
			event.target.dataset.tower[event.target.dataset.tower.length - 1];
		console.log(currentChoice);
	});
});

const moveToThree = (event) => {
	console.log(event.target.id);
};

tower1Btn.addEventListener('click', moveToOne);
tower2Btn.addEventListener('click', moveToTwo);
tower3Btn.addEventListener('click', moveToThree);
