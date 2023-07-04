let language = prompt('Доступные языки: en, ru, de', 'Введите свой язык');

switch (language){
	case 'en':
		console.log('Hello!');
		break;
	case 'ru':
		console.log('Здравствуйте!');
		break;
	case 'de':
		console.log('Hallo!');
		break;
	default:
		console.log('Try again.')
}