const request = {
	search: 'Вася',
	take: 10,
};

//Вариант 1
function queryString (request) {
	return Object.keys(request).reduce((acc, key, index) => {
		if (index !== Object.keys(request).length - 1) {
			acc += key + '=' + request[key] + '&';
		} else {
			acc += key + '=' + request[key];
		}
		return acc;
	}, '?')
}
console.log(queryString(request));

//Вариант 2
function queryString1 (request) {
	const queryString1 = Object.keys(request)
	.map(key => key + '=' + request[key])
	.join('&');

	return '?' + queryString1
}
console.log(queryString1(request));