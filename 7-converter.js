// 1$ = 90.51₽
// 1₽ = 0.011$

// 1€ = 98.47₽
// 1₽ = 0.010€

// 1$ = 0.92€
// 1€ = 1.09$


function converter(currencyFunds, currencyTarget) {
	switch (true) {
		case currencyFunds == '₽' && currencyTarget == '$' :
			return 0.011;
		case currencyFunds == '₽' && currencyTarget == '€' :
			return 0.010;
		case currencyFunds == '$' && currencyTarget == '₽' :
			return 90.51;
		case currencyFunds == '$' && currencyTarget == '€' :
			return 0.92;
		case currencyFunds == '€' && currencyTarget == '₽' :
			return 98.47;
		case currencyFunds == '€' && currencyTarget == '$' :
			return 1.09;
		default: return null;
	}
}

function resultConverter(summ, currencyFunds, currencyTarget) {
	const exchangeRate = converter(currencyFunds, currencyTarget);
	 if (exchangeRate === null) {
			return null;
		} else {
			return summ * exchangeRate;
		}
	}
console.log(resultConverter(1000, '$', '€'));