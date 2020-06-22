
let menu = document.querySelector(".navBar");
console.log(menu);

let burger = document.querySelector(".burger");

let burgerFunction = () => {
        menu.classList.toggle('toggle')
};

burger.addEventListener('click', burgerFunction);

$(document).ready(function(){
        $('.teamContainer').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        infinite: true,
        dots: true,
        });
});