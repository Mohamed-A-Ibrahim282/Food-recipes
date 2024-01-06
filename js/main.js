var pizzaRecipes = [];
var burgerRecipes = [];
var pastaRecipes = [];
var iceCreamRecipes = [];
var cakeRecipes = [];
var donutsRecipes = [];

document.addEventListener("contextmenu", (e) => {
    e.preventDefault()
})

async function getPizza() {
    var data = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    var dataValue = await data.json();
    pizzaRecipes = dataValue.recipes;
    var food = "pizza"
    display(pizzaRecipes, food)

}
getPizza()


async function getBurger() {
    var data = await fetch("https://forkify-api.herokuapp.com/api/search?q=hamburger");
    var dataValue = await data.json();
    burgerRecipes = dataValue.recipes;
    var food = "burger"
    display(burgerRecipes, food)

}
getBurger()


async function getPasta() {
    var data = await fetch("https://forkify-api.herokuapp.com/api/search?q=pasta");
    var dataValue = await data.json();
    pastaRecipes = dataValue.recipes;
    var food = "pasta"
    display(pastaRecipes, food)

}
getPasta()


async function getIceCream() {
    var data = await fetch("https://forkify-api.herokuapp.com/api/search?q=ice%20cream");
    var dataValue = await data.json();
    iceCreamRecipes = dataValue.recipes;
    var food = "iceCream"
    display(iceCreamRecipes, food)

}
getIceCream()


async function getCake() {
    var data = await fetch("https://forkify-api.herokuapp.com/api/search?q=cake");
    var dataValue = await data.json();
    cakeRecipes = dataValue.recipes;
    var food = "cake"
    display(cakeRecipes, food)

}
getCake()


async function getDonuts() {
    var data = await fetch("https://forkify-api.herokuapp.com/api/search?q=donuts");
    var dataValue = await data.json();
    donutsRecipes = dataValue.recipes;
    var food = "donuts"
    display(donutsRecipes, food)

}
getDonuts()


function display(list, food) {
    let cartoona = ``;
    for (let i = 0; i < 16; i++) {
        cartoona += `                <div class="col-md-3">
        <div class = "item shadow rounded-3">
            <img src="${list[i].image_url}" class="w-100 rounded-top-3">
            <div class = "p-3">
              <p class = "text-center text-black fw-bold">${list[i].title}</p>
               <div class="btn mainBg w-100 fw-bold">view</div>
            </div>
        </div>
    </div>`
    }
    document.querySelector(`.${food}`).innerHTML = cartoona;
}

function changNanBg() {
    var navbar = document.getElementById('navbar-example');
    var scrollValue = window.scrollY;
    if (scrollValue < 168) {
        navbar.style.backgroundColor = "transparent"
    }
    else {
        navbar.style.backgroundColor = "#0f172b"
    }
}
window.addEventListener('scroll', changNanBg)