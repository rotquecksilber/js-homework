const password = 'passWord';
const protection = String(Math.floor(Math.random() * 10));
const userPassword = prompt('Введите свой пароль');

//Код работает и без объявления этой переменной, но я не знаю, почему
let reversedPassword;

function crypto(password) {

	//Превратим строку в массив и перевернем
	let arrayReversed = password.split('').reverse();

	//Если длина массива >=5, заберем 3,4 символы и добавим в начало
	if (arrayReversed.length >= 5) {
		arrayReversed = arrayReversed.slice(3, 5).concat(arrayReversed);
	}

	//Заберем последний символ и переставим в начало
	const lastSymbol = arrayReversed.pop();
	arrayReversed.unshift(lastSymbol);

	//Если длина массива >=6, поменяем местами 2 и 6 символы
	if (arrayReversed.length >= 6) {
		[arrayReversed[2], arrayReversed[6]] = [arrayReversed[6], arrayReversed[2]];
	}

	//Если длина массива >=3, добавим "protection" число на 3 позицию
	//"Protection" число является строкой
	if (arrayReversed.length >= 3) {
		arrayReversed.splice(3, 0, protection);
	}

	//Вернем строку
	reversedPassword = arrayReversed.join('');
}


function decoder(reversedPassword, userPassword) {

	//Превратим строку в массив
    const decodedPassword = reversedPassword.split('')

	//Для начала избавимся от "protection" числа
	//Позиция числа может измениться, когда мы начнем двигать элементы
	if (decodedPassword.length >= 3) {
		decodedPassword.splice(3,1);
	}

	//Поменяем местами 6 и 2 символы
	if (decodedPassword.length >= 6) {
		[decodedPassword[6], decodedPassword[2]] = [decodedPassword[2], decodedPassword[6]];
	}

	//Возьмем первый символ и поставим в конец
	const firstSymbol = decodedPassword.shift();
	decodedPassword.push(firstSymbol);

	//Удалим первые 2 символа (если длина >=5)
	let i = 0;
	if (decodedPassword.length >= 5) {
		do {
			i += 1;
  			decodedPassword.shift();
		} while (i < 2);
	}

	//Перевернем обратно и превратим в строку
	const check = decodedPassword.reverse().join('');

	//Проверка паролей
	check === userPassword ? console.log(true) : console.log(false);
}

crypto(password);
decoder(reversedPassword, userPassword)

