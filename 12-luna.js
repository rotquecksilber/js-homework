const cardNumber = '4561-2612-1234-5464';
//const cardNumber = '4561-2612-1';
let cleanCardNumber = cardNumber.replaceAll('-','').split('').map(Number);
let oddNumbers;
let evenNumbers;

//Проверка на количество цифр в номере без контрольной
if ((cleanCardNumber.length - 1) %2 != 0) {

//нечетные
	oddNumbers = cleanCardNumber.filter((element, index) => {
		return (index + 1) % 2 !== 0;
	}).map((element) => {
		if (element * 2 < 9) {
			return element * 2;
		} else {
			return element * 2 -9;
		} 
	});

//четные
	evenNumbers = cleanCardNumber.reduce((acc, element, index) => {
		if ((index + 1) % 2 === 0) {
			acc.push(element);
		} 
		return acc;
	}, []);

} else {

//четные
	evenNumbers = cleanCardNumber.filter((element, index) => {
		return (index + 1) % 2 === 0;
	}).map((element) => {
		if (element * 2 < 9) {
			return element * 2;
		} else {
			return element * 2 -9;
		} 
	});

//нечетные
	oddNumbers = cleanCardNumber.reduce((acc, element, index) => {
		if ((index + 1) % 2 !== 0) {
			acc.push(element);
		} 
		return acc;
	}, []);
}

//Сумма
const sum = oddNumbers.concat(evenNumbers)
.reduce((acc, element) => {
	acc = acc + element;
	return acc
}, 0);

//Функция
function result(sum){
	if (sum % 10 === 0) {
		return true;
	} return false;
}

console.log(result(sum));