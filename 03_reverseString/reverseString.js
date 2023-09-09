//The function requires an arguement- we wil call it word
const reverseString = function (word) {
	//the function will reverse the provided word
	//use split method to convert string into a array containing each element.
	const wordList = word.split('');
	console.log(wordList);
	//use reverse method to reverse the list
	const reverseWordList = wordList.reverse();
	console.log(reverseWordList);
	//use join method to create a string from reversed list
	const reversedWord = reverseWordList.join('');

	// let wordList = [];
	// let i = 0;
	// while (i < word.length) {
	// 	wordList.push(word[i]);
	// 	i++;
	// }
	console.log(reversedWord);
	return wordList.reverse().join('');
};
reverseString('!hello world!');
// Do not edit below this line
module.exports = reverseString;
