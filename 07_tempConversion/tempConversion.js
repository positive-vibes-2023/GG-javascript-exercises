const convertToCelsius = function (temp) {
	convertedTemp = (temp - 32) * (5 / 9);
	console.log(
		`The ${temp} degree Fahrenheit is equal to ${convertedTemp} degree celsius.`
	);
	return parseFloat(convertedTemp.toFixed(1));
};

const convertToFahrenheit = function (temp) {
	convertedTemp = temp * (9 / 5) + 32;
	console.log(
		`The ${temp} degree Fahrenheit is = ${convertedTemp} degree celsius.`
	);
	return parseFloat(convertedTemp.toFixed(1));
};
convertToCelsius(32);
// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
