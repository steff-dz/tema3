const main = document.querySelector('#main');
nav.after(main);

const hammer = document.querySelector('.fa-hammer');
const startButton = document.querySelector('#startButton');
const orderGuide = document.querySelector('#orderGuide');

//startButton.addEventListener('click',
//startButton.addEventListener('click', nextPage, false);

startButton.addEventListener('click', function() {
	dropHammer(dropped);
});

function dropHammer(cb) {
	console.log(`dropping the hammer`);
	hammer.style.transform = 'translateX(12px) translateY(5px) rotate(65deg)';
	hammer.style.transition = '.4s';
	startButton.style.transitionDelay = '.3s';
	startButton.style.backgroundColor = 'lightgreen';

	return setTimeout(cb, 1000);
}

function dropped() {
	console.log(`the hammer has been dropped`);
	main.innerHTML = 'NEXT PAGE GO';
}

// console.log(`${new Date()} - ${i} About to drop the hammer`);
// dropHammer(dropped);

//onsole.log(`${new Date()} - ${i} About to drop the hammer again`);
// anonymous function signature: function(){ dropHammer(dropped) }
// inline function declaration, it only exists for the current function scope

// startButton.onclick = fakeEventListener('hammer as cb', function() {
// 	dropHammer(dropped);
// });
// dropped();

// console.log(`${new Date()} - ${i} Finished wth round ${i}`);

// console.log(`${new Date()} - ${i} the hammer broke`);
