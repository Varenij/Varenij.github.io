
let menu = document.querySelector(".navBar");
console.log(menu);

let burger = document.querySelector(".burger");

let burgerFunction = () => {
        menu.classList.toggle('toggle')
};

burger.addEventListener('click', burgerFunction);