const leapYears = function (year) {
	//First check if year is  divisible by four
	if (year % 4 == 0) {
		// then check if divisible by 400
		if (year % 400 == 0) {
			// if yes >> declare true
			console.log(`${year} is a Leap Year!`);
			return true;
		}
		//if no then check if divisible by 100.
		else if (year % 100 == 0) {
			// Divisible by 4 $ since not divisible 400 and  divisible by 100 - declare not a leap year.
			console.log(`${year} is a NOT a Leap Year!`);
			return false;
		} else {
			//Divisible by 4 BUT but not by 400 and 100.
			console.log(`${year} is a Leap Year!`);
			return true;
		}
	} else {
		//Since not divisible by 4- cannot be leap year.
		console.log(`${year} is a NOT a Leap Year!`);
		return false;
	}
};

// Do not edit below this line
module.exports = leapYears;
