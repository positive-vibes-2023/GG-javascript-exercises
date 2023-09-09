const repeatString = function (string, num) {
	var stringList = [];
	if (num < 0) {
		return 'ERROR';
	}
	while (num > 0) {
		stringList.push(string);
		num = num - 1;
	}
	const finalString = stringList.join('');
	return finalString;
};

// Do not edit below this line
module.exports = repeatString;
