const productsCountEl = document.getElementById("products-count");

const addToCartButtons = document.querySelectorAll(".add-to-cart1");
let pushHeart = document.querySelectorAll(".heart");

// for(let i = 0; i < addToCartButtons.length; i++) {
// 	addToCartButtons[i].addEventListener('click', function() {
// 		let prevProductsCount = +productsCountEl.textContent;
// 		productsCountEl.textContent = prevProductsCount + 1;
// 	});
// }

for(let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener('click', function() {
		productsCountEl.textContent = +productsCountEl.textContent + 1;
	});
};

for(let i = 0; i < pushHeart.length; i++) {
	pushHeart[i].addEventListener('click', function() {
		console.log ("liked");
		pushHeart[i].classList.toggle("heart");
	});
};

$('.slider-block').slick({
dots:true,
autoplay:true,
autoplaySpeed:2000,
});

$('#select-beast').selectize({
    create:true,
    sortField:'text'
});

// change quantity

let incrementBtn = document.querySelectorAll('.increment-btn');
let decrementBtn = document.querySelectorAll('.decrement-btn');
let quantityInput = document.querySelectorAll('.product-quantity input');

// ВАРИАНТ С УРОКА

// incrementBtn.addEventListener("click",function() {
//     let currenctValue = +quantityInput.value;
//     let nextValue = currenctValue + 1;
//     quantityInput.value = nextValue;
//     if(nextValue <= 1) {
//         decrementBtn.disabled = true;
//     } else {
//         decrementBtn.disabled = false;
//     }
// })

// decrementBtn.addEventListener("click",function() {
//     let currenctValue = +quantityInput.value;
//     let nextValue = currenctValue - 1;
//     quantityInput.value = nextValue;
//     if(nextValue <= 1) {
//         decrementBtn.disabled = true;
//     } else {
//         decrementBtn.disabled = false;
//     }
// })


// ПЕРВЫЙ ВАРИАНТ

// for(let i = 0; i < incrementBtn.length; i++) {
// 	incrementBtn[i].addEventListener('click', function() {
//     quantityInput[i].value = +quantityInput[i].value + 1;
//     if(+quantityInput[i].value >= 5) {
//         incrementBtn[i].disabled = true;
//     } else {
//         incrementBtn[i].disabled = false;
//     };
// 	if(+quantityInput[i].value <= 1) {
//         decrementBtn[i].disabled = true;
//     } else {
//         decrementBtn[i].disabled = false;
//     }
// 	})
// };

// for(let i = 0; i < decrementBtn.length; i++) {
// 	decrementBtn[i].addEventListener('click', function() {
//     quantityInput[i].value = +quantityInput[i].value - 1;
//     if(+quantityInput[i].value >= 5) {
//         incrementBtn[i].disabled = true;
//     } else {
//         incrementBtn[i].disabled = false;
//     };
//     if(+quantityInput[i].value <= 1) {
//         decrementBtn[i].disabled = true;
//     } else {
//         decrementBtn[i].disabled = false;
//     }
// 	})
// };

// ВТОРОЙ ВАРИАНТ

for(let i = 0; i < incrementBtn.length; i++) {
    incrementBtn[i].addEventListener('click', function() {
    quantityInput[i].value = +quantityInput[i].value + 1;
    if(+quantityInput[i].value >= 5) {
        incrementBtn[i].disabled = true;
    } else {
        incrementBtn[i].disabled = false;
    };
    if(+quantityInput[i].value <= 1) {
        decrementBtn[i].disabled = true;
    } else {
        decrementBtn[i].disabled = false;
    }
    });
    decrementBtn[i].addEventListener('click', function() {
    quantityInput[i].value = +quantityInput[i].value - 1;
    if(+quantityInput[i].value >= 5) {
        incrementBtn[i].disabled = true;
    } else {
        incrementBtn[i].disabled = false;
    };
    if(+quantityInput[i].value <= 1) {
        decrementBtn[i].disabled = true;
    } else {
        decrementBtn[i].disabled = false;
    }
    })
};