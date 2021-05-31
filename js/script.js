const hamburguer = document.querySelector('.hamburguer_img');
const options_hamburguer = document.querySelector('.options_hamburguer');
const overlay = document.querySelector('.overlay');

hamburguer.addEventListener("click", () => {
    if(options_hamburguer.style.display == "inline"){
        options_hamburguer.style.display = "none";
        overlay.style.display = "none";
        hamburguer.src = "../scss/images/icon-hamburger.svg";
    }
    else{
        options_hamburguer.style.display = "inline";
        overlay.style.display = "inline";
        hamburguer.src = "../scss/images/icon-close.svg";
    }
})

window.addEventListener("resize", function(event) {
    if(document.body.clientWidth > 1200){
        options_hamburguer.style.display = "none";
        overlay.style.display = "none";
        hamburguer.src = "../scss/images/icon-hamburger.svg";
    }
})