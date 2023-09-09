const sumAll = function (start, end) {
	list = [start, end];
	if (list.every((element) => element >= 0 && typeof element === 'number')) {
		// start >= 0 &&
		// end >= 0 &&
		// typeof start == 'number' &&
		// typeof end == 'number'

		list.sort((a, b) => a - b);
		let val = list[0];
		var sum = list[0];
		while (val < list[1]) {
			val++;
			sum = sum + val;
		}
		return sum;
	} else {
		return 'ERROR';
	}
};
sumAll(10, '90');

// Do not edit below this line
module.exports = sumAll;
