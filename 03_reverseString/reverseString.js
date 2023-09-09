//The function requires an arguement- we wil call it word
const reverseString = function (word) {
	//the function will reverse the provided word
	let wordList = [];
	let i = 0;
	while (i < word.length) {
		wordList.push(word[i]);
		i++;
	}
	return wordList.reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
