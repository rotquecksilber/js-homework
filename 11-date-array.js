const arr = ['10-02-2022', 'test', '11/12/2023', '00/13/2022', '41/12/2023'];
console.log(arr);

const validDates = arr.map((element) => {
	const isEuropeanFormat = element.includes('-');
	const separator = isEuropeanFormat ? '-' : '/';
	const [part1, part2, part3] = element.split(separator);

	if (isEuropeanFormat) {
    	const day = part1;
    	const month = part2;
    	const year = part3;
    	return `${day}-${month}-${year}`;
 	} else {
    	const month = part1;
    	const day = part2;
    	const year = part3;
    	return `${day}-${month}-${year}`;
	}
}).filter((element) => {
	const [day, month, year] = element.split('-').map(Number);
	return !isNaN(day) && !isNaN(month) && !isNaN(year) && day > 0 && day <= 31 && month > 0 && month <= 12;
});
console.log(validDates);