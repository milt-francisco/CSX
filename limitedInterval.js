const limitedInterval = (cb, wait, limit) => { //no idea if this is actually correct
	let interval = setInterval(cb, wait) 	
	setTimeout(() => {clearInterval(interval)}, limit);
}
// /* Uncomment the following line and click 'run' to test your work */
limitedInterval(() => console.log('repeating'), 100, 550); // should log 'repeating' once per 100 ms, five times.

/*Challenge: limitedInterval
Write a function called limitedInterval that accepts as arguments in this order -

callback function
wait time in milliseconds
limit time in milliseconds.
limitedInterval should run the callback once every wait milliseconds, up to limit milliseconds, and then stop.*/
