const removeFromArray = function (array, garbage) {
	garbageIndex = array.indexOf(garbage);
	// Create a empty distalList that will capture all the popped out elements that come after the garbage.
	// once the garbage element is popped out, the remaining array is simply
	// concatenated with the distaList.
	// However, we need to reverse the distalList before concatenating as it has
	// been reversed as the popped elements were added to it from end.

	distalList = [];
	proximalList = [];

	let i = array.length;
	while (i > 0) {
		//console.log(i);
		poppedELement = array.pop();
		// console.log(poppedELement);

		if (poppedELement != garbage) {
			distalList.push(poppedELement);
			// console.log(distalList);
		} else {
			// console.log(array);
			// console.log(array.concat(distalList.reverse()));
			return array.concat(distalList.reverse());
		}
		i = i - 1;
	}
};
removeFromArray([1, 2, 6, 8, 9, 4], 2);
// Do not edit below this line
module.exports = removeFromArray;
