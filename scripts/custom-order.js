const main = document.querySelector('#main');
nav.after(main);

const hammer = document.querySelector('.fa-hammer');
const startButton = document.querySelector('#startButton');
const orderGuide = document.querySelector('#orderGuide');
const formContainer = document.querySelector('#formContainer');

//startButton.addEventListener('click',
//startButton.addEventListener('click', nextPage, false);

startButton.addEventListener('click', function() {
	dropHammer(enterForm);
});

function dropHammer(cb) {
	//console.log(`dropping the hammer`);
	hammer.classList.toggle('hammerDown');
	return setTimeout(cb, 800);
}

function enterForm() {
	//console.log(`the hammer has been dropped`);
	hammer.classList.toggle('hammerUp', 'hammerDown');
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

	//CREATING THE FORM
	const formContainer = document.createElement('div');
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

	const formButton = document.querySelector('#formButton');
	formButton.addEventListener('click', function() {
		randomFunction(event);
	});
	function randomFunction(event) {
		event.preventDefault();
		main.style.backgroundColor = 'red';
	}
}
