const repeatString = function (string, num) {
	var stringList = []; //Use a empty list to store the strings.
	if (num < 0) {
		return 'ERROR';
	}
	while (num > 0) {
		stringList.push(string); //keep adding the string to the list each time loop runs.
		num = num - 1;
	}
	const finalString = stringList.join(''); //Use join command to join all the string in the list. Using '' ensures that the stings are joined without space.
	return finalString;
};

// Do not edit below this line
module.exports = repeatString;
