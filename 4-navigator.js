let addressLat = 54;
let addressLong = 73;
let positionLat = 11;
let positionLong = 19;
//вычисления 
let path = Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);
console.log(`Путь составит ${path.toFixed(2)} км`);