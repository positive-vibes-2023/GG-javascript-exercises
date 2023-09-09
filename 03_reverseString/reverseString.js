const reverseString = function (word) {
	const wordList = word.split('');
	const reverseWordList = wordList.reverse();
	const reversedWord = reverseWordList.join('');
	return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
