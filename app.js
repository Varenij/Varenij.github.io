// quarry

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


//инкремент декремент

let incrementBtn = document.querySelectorAll('.increment-btn');
let decrementBtn = document.querySelectorAll('.decrement-btn');
let quantityInput = document.querySelectorAll('.product-quantity input');

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
    }
});

function openModalOnScroll () {
    if (window.pageYOffset >= document.documentElement.scrollHeight/2) {
        openModal();
        window.removeEventListener('scroll', openModalOnScroll);
    }
};

window.addEventListener('scroll', openModalOnScroll);