//Вариант 1
const arr = [1, 40, -5, 10, 0, -7, 15];
for (let index in arr) {
	for (let index in arr) {
		index = Number(index);
    if (arr[index] < arr[index + 1]) {
    	[arr[index + 1], arr[index]] = [arr[index], arr[index + 1]];
    }
  }
} console.log(arr);

//Вариант 2
const arr2 = [2, 12, -10, 0, -3, 50, 6]; 
for (let index in arr2) {
index = Number(index);
	if (arr2[index + 1] > arr2[index]) {
		[arr2[index + 1], arr2[index]] = [arr2[index], arr2[index + 1]];
		for (let i = index; i > 0; i--){
			if (arr2[i] > arr2[i - 1]){
				[arr2[i], arr2[i - 1]] = [arr2[i - 1], arr2[i]];
			}
		}
	}
} console.log(arr2);
