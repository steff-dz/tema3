let i = 1;

function dropHammer(cb) {
	console.log(`${new Date()} - ${i % 2} dropping the hammer`);
	i += 1;

	return setTimeout(cb, 2000);
}

function dropped() {
	console.log(`${new Date()} - ${i} the hammer has been dropped`);
}

function fakeEventListener(event_name, func) {
	console.log(`${new Date()} - ${i} Starting up ${event_name}`);

	return func();
}

console.log(`${new Date()} - ${i} About to drop the hammer`);
dropHammer(dropped);

console.log(`${new Date()} - ${i} About to drop the hammer again`);
// anonymous function signature: function(){ dropHammer(dropped) }
// inline function declaration, it only exists for the current function scope
fakeEventListener('hammer as cb', function() {
	dropHammer(dropped);
});
dropped();

console.log(`${new Date()} - ${i} Finished wth round ${i}`);

console.log(`${new Date()} - ${i} the hammer broke`);

// SO FIRST, LINE 45 RUNS AND THE TEXT IN CONSOLE LOG GOES. T
//THEN, THE DROPHAMMER FUNCTION IS CALLED WITH THE FUNCTION DROPPED AS ITS ARGUEMENT
//THE FUNCTION DROPHAMMER PRINTS LINE 28. DROPHAMMER THERE HAS CB AS A PARAMETER TO CATCH DROPPED PRINTED IN LINE 46. BUT; THERE IS A SETTIMEOUt PUT TO DROPPED TO 2000 MILLISECONDS
//THEN, LINE 48 RUNS WHILE DROPPED IS WAITING. IT HAS 2 BEFORE IT BECAUSE WE ADDED TO THE I VARIABLE.
//THEN 51 CALLS THE FUNCTION FAKE EVENT LISTENER WHICH RUNS LINES 39. IN 51 WE HAVE GIVEN THE EVENT NAME A NAME AND PASSED IT IN, AND ALSO AN ANONYMOUS FUNCTION WHICH IS CALLED THE DROPHAMMER DROPPED FUNCTION. SO THEN, 52 RUNS WHICH IS 28 ALL OVER AGAIN.
//DROPPED RUNS LAST BECAUSE OF THE SECOND TIMEOUT.
