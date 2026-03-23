import '../scss/style.scss'

console.log('It works!')

const showNavigationMenuButton = document.querySelector('.burger');
const hideNavigationMenuButton = document.querySelector('close');
showNavigationMenuButton.addEventListener('click', show);

hideNavigationMenuButton.addEventListener('click', hide);

function show (event){
    showNavigationMenuButton.style.display = "block";
}

function hide (event){
    hideNavigationMenuButton.style.display = "none";
}


