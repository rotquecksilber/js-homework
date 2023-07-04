const hasLicence = true;
const age = 20;
const isDrunk = true; //сейчас пьян

console.log(`${hasLicence && age >= 18 && !isDrunk ?
	'Может' : 'Не может'}`);