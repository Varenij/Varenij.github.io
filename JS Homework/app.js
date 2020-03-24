let price = +prompt("Введіть загальну вартість товарів", "");
let priceWithDicount
 
if (price <= 1000) {
priceWithDicount = price - (price * 3 / 100)
} else if (price > 1000 && price <= 5000) {
priceWithDicount = price - (price * 5 / 100)
} else {
priceWithDicount = price - (price * 7 / 100)
}

console.log ("Ціна товару зі знижкою складає " + priceWithDicount);



function totalPrice (price) {
	let priceWithDicount
	if (price <= 1000) {
	priceWithDicount = price - (price * 3 / 100)
	} else if (price > 1000 && price <= 5000) {
	priceWithDicount = price - (price * 5 / 100)
	} else {
	priceWithDicount = price - (price * 7 / 100)
	}	
	console.log ("Ціна товару зі знижкою складає " + priceWithDicount);
}

totalPrice (100);



function totalPrice (price) {
	let discount;
	if (price <= 1000) {
	discount = 3;
	} else if (price > 1000 && price <= 5000) {
	discount = 5;
	} else {
	discount = 7;
	}	
	let priceWithDiscount = price - (price * discount / 100)
	console.log ("Ціна товару зі знижкою складає " + priceWithDiscount);
}

totalPrice (5000);




function test (a,b,c) {
	if (c === true && a > b) {
		console.log (a)
	} else if (c === true && a < b) {
		console.log (b)
	} else if (c === false && a > b) {
		console.log (b)
	} else if (c === false && a < b) {
		console.log (a)
	}
}
test (2,12,false);
test (1,3,true);




let fruits = [20, 25, 10, 15, 30];

alert(fruits.pop() );

alert(fruits[fruits.length-1] );



let sum = 0;
for (let i = fruits.length-1; i >= 0; i--) {
	sum = sum+fruits[i];
};
alert(sum);


let minNum = fruits[0];
for (let i = fruits.length; i > 0; i--) {
if (minNum > fruits[i]) minNum = fruits[i];
};
alert (minNum);



let maxNum = fruits[0];
for (let i = fruits.length; i > 0; i--) {
if (maxNum < fruits[i]) maxNum = fruits[i];
};
alert (maxNum);