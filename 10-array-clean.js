function clean(arr) {
	return function (condition) {
		console.log(`В массиве [${arr}] удалим все, что больше ${condition}.`);
		for (let index = arr.length - 1; index >= 0; index--) {
			if (arr[index] < condition) {
				console.log(arr[index], false);
			} else {
				console.log(arr[index], true);
				arr.splice(index, 1);
				
			}
		} console.log(arr); return arr;
	} 
} 

clean([0, 1, 2, 3, 4, 5, 2, 17, 8, 9, 1, 2, 99])(3);