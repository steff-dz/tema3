const main = document.querySelector('#main');
nav.after(main);

const hammer = document.querySelector('.fa-hammer');
const startButton = document.querySelector('#startButton');
const orderGuide = document.querySelector('#orderGuide');
//const formContainer = document.querySelector('#formContainer');

startButton.addEventListener('click', function() {
	dropHammer(enterForm);
});

function enterForm() {
	hammer.classList.add('hammerUp');
	hammer.classList.remove('hammerDown');

	main.style.border = '1px solid black';

	//REMOVING STUFF FROM FIRST PAGE
	main.removeChild(main.children[0]);
	main.removeChild(orderGuide);
	main.removeChild(startButton);

	//CREATING THE PROGRESS BAR
	const progressContainer = document.createElement('div');
	progressContainer.id = 'progressContainer';
	document.body.appendChild(progressContainer);
	main.before(progressContainer);

	progressContainer.innerHTML = `
	<div id="stepBox1">1</div>
	<div id="stepBox2">2</div>
	<div id="stepBox3">3</div>
	`;

	progressContainer.children[0].style.backgroundColor = 'lightgreen';

	firstForm();
	//CREATING THE FORM
	// const formContainer = document.createElement('div');
	// formContainer.id = 'formContainer';
	// main.appendChild(formContainer);

	// formContainer.innerHTML = `
	// <form>
	// <label>NAME</label>
	// <input type="text" name="name" "class="name-input" placeholder="first name"></input>
	// <input type="text" name="name" "class="name-input" placeholder="last name"></input>
	// <label>Email</label>
	// <input type="email" name="email" placeholder="email here"></input>
	// <label>Location</label>
	// <input type="text" name="location" placeholder="type your city in Norway here"</input>
	// <button id="formButton">Next</button>
	// </form>
	// `;

	const formButton = document.querySelector('#formButton');
	formButton.addEventListener('click', function() {
		pickUpHammer(event);
	});
}

function dropHammer(cb) {
	//console.log(`dropping the hammer`);
	hammer.classList.toggle('hammerDown');
	return setTimeout(cb, 800);
}

function pickUpHammer(event) {
	event.preventDefault();
	hammer.classList.remove('hammerUp');
	dropHammer(secondForm);
}

const firstForm = () => {
	let formContainer = document.createElement('div');
	formContainer.id = 'formContainer';
	main.appendChild(formContainer);

	formContainer.innerHTML = `
	<form>
	<label>NAME</label>
	<input type="text" name="name" "class="name-input" placeholder="first name"></input>
	<input type="text" name="name" "class="name-input" placeholder="last name"></input>
	<label>Email</label>
	<input type="email" name="email" placeholder="email here"></input>
	<label>Location</label>
	<input type="text" name="location" placeholder="type your city in Norway here"</input>
	<button id="formButton">Next</button>
	</form>
	`;
};

function secondForm() {
	hammer.classList.add('hammerUp');
	hammer.classList.remove('hammerDown');

	//Here I am creating a reference to the form and the inputs
	const form = document.querySelector('form');
	const inputs = document.querySelectorAll('input');

	//Here I am creating a FOR OF loop to remove each input in the form
	for (let input of inputs) {
		form.removeChild(input);
	}

	//Now I am making a reference to the labels and changing the name
	const labels = document.querySelectorAll('label');
	labels[0].innerText = 'Product Type';
	labels[1].innerText = 'Materiel Type';
	labels[2].innerText = 'Finish';

	//Now I will create and append selection fields
	// 	let selectables = ["select1", "select2", "select3"]
	// 	selectables.forEach((el) => {

	// 	})
}
