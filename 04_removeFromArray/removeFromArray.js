const removeFromArray = function (array, ...args) {
	const garbageList = args;
	var garbageIndex = 0;

	while (garbageIndex < garbageList.length) {
		garbage = garbageList[garbageIndex];
		index = array.indexOf(garbage);

		if (index == -1) {
			garbageIndex++;
			garbage = garbageList[garbageIndex];
			index = array.indexOf(garbage);
		} else {
			console.log('entered the cleaning tasK!');

			requiredIterations = array.length - index;

			let i = 1;
			distalList = [];

			while (i <= requiredIterations) {
				poppedELement = array.pop();
				if (poppedELement != garbage) {
					distalList.push(poppedELement);
				} else {
					array = array.concat(distalList.reverse());
				}
				i = i + 1;
			}
			garbageIndex++;
		}
	}
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
