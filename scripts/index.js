// let i = 1;

// function dropHammer(cb) {
// 	console.log(`${new Date()} - ${i % 2} dropping the hammer`);
// 	i += 1;

// 	return setTimeout(cb, 2000);
// }

// function dropped() {
// 	console.log(`${new Date()} - ${i} the hammer has been dropped`);
// }

// function fakeEventListener(event_name, func) {
// 	console.log(`${new Date()} - ${i} Starting up ${event_name}`);

// 	return func();
// }

// console.log(`${new Date()} - ${i} About to drop the hammer`);
// dropHammer(dropped);

// console.log(`${new Date()} - ${i} About to drop the hammer again`);
// // anonymous function signature: function(){ dropHammer(dropped) }
// // inline function declaration, it only exists for the current function scope
// fakeEventListener('hammer as cb', function() {
// 	dropHammer(dropped);
// });
// dropped();

// console.log(`${new Date()} - ${i} Finished wth round ${i}`);

// console.log(`${new Date()} - ${i} the hammer broke`);

// SO FIRST, LINE 45 RUNS AND THE TEXT IN CONSOLE LOG GOES. T
//THEN, THE DROPHAMMER FUNCTION IS CALLED WITH THE FUNCTION DROPPED AS ITS ARGUEMENT
//THE FUNCTION DROPHAMMER PRINTS LINE 28. DROPHAMMER THERE HAS CB AS A PARAMETER TO CATCH DROPPED PRINTED IN LINE 46. BUT; THERE IS A SETTIMEOUt PUT TO DROPPED TO 2000 MILLISECONDS
//THEN, LINE 48 RUNS WHILE DROPPED IS WAITING. IT HAS 2 BEFORE IT BECAUSE WE ADDED TO THE I VARIABLE.
//THEN 51 CALLS THE FUNCTION FAKE EVENT LISTENER WHICH RUNS LINES 39. IN 51 WE HAVE GIVEN THE EVENT NAME A NAME AND PASSED IT IN, AND ALSO AN ANONYMOUS FUNCTION WHICH IS CALLED THE DROPHAMMER DROPPED FUNCTION. SO THEN, 52 RUNS WHICH IS 28 ALL OVER AGAIN.
//DROPPED RUNS LAST BECAUSE OF THE SECOND TIMEOUT.

// global scope
let something = 'foo';

do_it = function(some_var) {
	// some_var scoped to this function
	console.log(`something=${something}, some_var=${some_var}`);
	// but we send back another string using that
	return something + ' ' + some_var;
};

got_it = function(var3) {
	// var3 also scoped to the function
	console.log(`I got ${var3}`);
	// modifying global variable
	something = `var3: ${var3}`;
};

const lol = 'vOv';
//-----------------------------------------------------------------------------------
console.log(`Step 1: I got something - ${something}`); //THIS IS SOMETHING FROM GLOBAL SCOPE

console.log(`Step 2: run do it, using var ${lol}`); //THIS IS ALSO MADE GLOBALLY

let did_it = do_it(lol); //MAKING A VARIABLE RUN A FUNCTION

console.log(`Step 3: got ${did_it} from do_it`);
console.log(`Step 4: function to function with ${lol}`);
let gone_did_it = got_it(do_it(lol));
// undefined, because no return statement
console.log(`Final return value: ${gone_did_it}`);
// change in sub scope still affects things in global
console.log(`Bonus: something='${something}'`);
