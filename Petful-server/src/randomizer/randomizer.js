const Q = require('../Qclass/Q')


//Randomizer function will scramble the static array and return the reordered array.
//The purpose is to not use the same cat/dog queue order over and over.
module.exports = function(arr){
	let currentIndex = arr.length;
	let temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    
		temporaryValue = arr[currentIndex];
		arr[currentIndex] = arr[randomIndex];
		arr[randomIndex] = temporaryValue;
  }
  
	return arr;

};
