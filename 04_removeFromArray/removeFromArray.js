const removeFromArray = function (array, ...args) {
	// Create a empty distalList that will capture all the popped out elements that come after the garbage.
	// once the garbage element is popped out, the remaining array is simply
	// concatenated with the distaList.
	// However, we need to reverse the distalList before concatenating as it has
	// been reversed as the popped elements were added to it from end.

	garbageList = args;
	garbageIndex = 0;
	while (garbageIndex < garbageList.length) {
		garbage = garbageList[garbageIndex];

		// find the location of item to be removed (garbage) in the main array.
		// Store this value in var index.This will be used to find the number of
		// times the while loop need to run.
		index = array.indexOf(garbage);
		requiredIterations = array.length - index;

		// initiate a counter i and increment it till it equals
		// required iterataions. Also reset and intialize a temp list that
		// stores popped elements.
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
	console.log(array);
	return array;
};
removeFromArray([1, 2, 6, 8, 9, 4], 2, 6);
// Do not edit below this line
module.exports = removeFromArray;
