//бургер меню
let menu = document.querySelector(".navBar");
let burger = document.querySelector(".burger");
let cross = document.querySelector(".cross");
let burgerFunction = () => {
        menu.classList.toggle('toggle');
        burger.classList.toggle('toggle');
        cross.classList.toggle('toggle2');
};

burger.addEventListener('click', burgerFunction);
cross.addEventListener('click', burgerFunction);

//модальные окна
let getInTouch = document.querySelector('#getInTouchBut');
let modal = document.querySelector('.modal');
let modal2 = document.querySelector('.modal2');
let clothBtn = document.querySelector('.btn-cloth');
let clothBtn2 = document.querySelector('.btn-cloth2');
let halfHeight = document.querySelector("#body").offsetHeight / 2;
let oneTime = true;

getInTouch.addEventListener('click', function() {
        modal.classList.add('show');
        modal.classList.remove('hide');	
});
document.body.onscroll = function() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > halfHeight && oneTime) {
    modal2.classList.add('show');
    modal2.classList.remove('hide');
    oneTime = false;
    };	
};

let closeModal = () => {
    modal.classList.add('hide');
    modal.classList.remove('show');
};
let closeModal2 = () => {
    modal2.classList.add('hide');
    modal2.classList.remove('show');
};

clothBtn.addEventListener('click', closeModal);
clothBtn2.addEventListener('click', closeModal2);

modal.addEventListener('click', function(e){
    if(e.target === modal) {
        closeModal();
    }
});
modal2.addEventListener('click', function(e){
    if(e.target === modal2) {
        closeModal2();
    }
});