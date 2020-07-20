// slider

$('.slider-block').slick({
dots:true,
autoplay:true,
autoplaySpeed:2000,
});

$('#select-beast').selectize({
    create:true,
    sortField:'text'
});



//лайк и корзина

let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".add-to-cart1");
let pushHeart = document.querySelectorAll(".heart");

for(let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener('click', function() {
		productsCountEl.textContent = +productsCountEl.textContent + 1;
	});
};

for(let i = 0; i < pushHeart.length; i++) {
	pushHeart[i].addEventListener('click', function() {
		pushHeart[i].classList.toggle("heart");
	});
};



//more details

let moreDetails = document.querySelectorAll('.more-details');
let modal = document.querySelector('.modal');
let clothBtn = document.querySelector('.btn-cloth');

let openModal = () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
};

let closeModal = () => {
    modal.classList.add('hide');
    modal.classList.remove('show');
};

moreDetails.forEach(function(btn){
    btn.addEventListener('click', openModal)
});

clothBtn.addEventListener('click', closeModal);

modal.addEventListener('click', function(e){
    if(e.target === modal) {
        closeModal();
    };
});

function openModalOnScroll () {
    if (window.pageYOffset >= document.documentElement.scrollHeight/2) {
        openModal();
        window.removeEventListener('scroll', openModalOnScroll);
    }
};

window.addEventListener('scroll', openModalOnScroll);



//инкремент/декремент

// let incrementBtn = document.querySelectorAll('.increment-btn');
// let decrementBtn = document.querySelectorAll('.decrement-btn');
// let quantityInput = document.querySelectorAll('.product-quantity input');

// for(let i = 0; i < incrementBtn.length; i++) {
//     incrementBtn[i].addEventListener('click', function() {
//     quantityInput[i].value = +quantityInput[i].value + 1;
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
//     });
//     decrementBtn[i].addEventListener('click', function() {
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
//     })
// };

let decrementBtn = document.querySelectorAll('.decrement-btn');
let incrementBtn = document.querySelectorAll('.increment-btn');
let productQuantity = document.querySelectorAll('.product-quantity input');
let currentCount = +productQuantity.value;
let minCount = 1;
let maxCount = 5;

// function toggleButtonState(count,incrementBtn,decrementBtn) {
//         decrementBtn.disabled = count <= minCount;
//         incrementBtn.disabled = count >= maxCount;
// };

// for (let i = 0; i < incrementBtn.length; i++) {
//         incrementBtn[i].addEventListener("click",function () {
//         let currentCount = +productQuantity[i].value; 
//         let nextCount = currentCount + 1;
//         productQuantity[i].value = nextCount;
//         toggleButtonState(nextCount,incrementBtn[i],decrementBtn[i]);
//     });
// }

// for (let i =0; i < decrementBtn.length; i++) {
//     decrementBtn[i].addEventListener("click",function () {
//         let currentCount = +productQuantity[i].value; 
//         let nextCount = currentCount - 1;
//         productQuantity[i].value = nextCount;
//         toggleButtonState(nextCount,incrementBtn[i],decrementBtn[i]);
//     });
// };

// for (let i = 0; i < productQuantity.length; i++) {
//     let currentCount = +productQuantity[i].value;
//     toggleButtonState(currentCount,incrementBtn[i],decrementBtn[i]);
// };



//OOP

function Counter (incrementButton,decrementButton,inputField,minCount=1,maxCount=5) {
    this.domRefs = {
        incrementButton,
        decrementButton,
        inputField,
    };

    this.toggleButtonState = function () {
        let count = this.domRefs.inputField.value;
        this.domRefs.incrementButton.disabled = count >= maxCount;
        this.domRefs.decrementButton.disabled = count <= minCount;
    };

    this.toggleButtonState();

    this.increment = function () {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount + 1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonState(nextCount);
    };

    this.decrement = function () {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount - 1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonState(nextCount);
    };

    this.domRefs.incrementButton.addEventListener('click', this.increment.bind(this));
    this.domRefs.decrementButton.addEventListener('click', this.decrement.bind(this));
};

for (let i = 0; i < decrementBtn.length; i++) {
    const counter = new Counter(incrementBtn[i],decrementBtn[i],productQuantity[i]);
};