const main = document.querySelector('#main');
nav.after(main);

const hammer = document.querySelector('.fa-hammer');
const startButton = document.querySelector('#startButton');

startButton.addEventListener('click', dropHammer);

function dropHammer() {
	//hammer.style.color = 'red';
	hammer.style.transform = 'translateX(12px) translateY(5px) rotate(65deg)';
	hammer.style.transition = '.4s';
	startButton.style.transitionDelay = '.3s';
	startButton.style.backgroundColor = 'lightgreen';
	// if (startButton.style.backgroundColor === 'lightgreen') {
	// 	main.innerHTML = '';
	// 	main.innerHTML = `NEXT PAGE WEE!`;
	// }
}
