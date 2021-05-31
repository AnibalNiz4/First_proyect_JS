const img1 = document.querySelector('.img1_footer');
const img2 = document.querySelector('.img2_footer');
const img3 = document.querySelector('.img3_footer');
const img4 = document.querySelector('.img4_footer');
const img5 = document.querySelector('.img5_footer');

const input = document.querySelector('.input');
const form = document.querySelector('.email');

img1.addEventListener("mouseenter", () =>{
    img1.src = "../scss/images/icon-facebook_footer.svg";
})
img1.addEventListener("mouseleave", () =>{
    img1.src = "../scss/images/icon-facebook.svg";
})

img2.addEventListener("mouseenter", () =>{
    img2.src = "../scss/images/icon-youtube_footer.svg";
})
img2.addEventListener("mouseleave", () =>{
    img2.src = "../scss/images/icon-youtube.svg";
})

img3.addEventListener("mouseenter", () =>{
    img3.src = "../scss/images/icon-twitter_footer.svg";
})
img3.addEventListener("mouseleave", () =>{
    img3.src = "../scss/images/icon-twitter.svg";
})

img4.addEventListener("mouseenter", () =>{
    img4.src = "../scss/images/icon-pinterest_footer.svg";
})
img4.addEventListener("mouseleave", () =>{
    img4.src = "../scss/images/icon-pinterest.svg";
})

img5.addEventListener("mouseenter", () =>{
    img5.src = "../scss/images/icon-instagram_footer.svg";
})
img5.addEventListener("mouseleave", () =>{
    img5.src = "../scss/images/icon-instagram.svg";
})

let elem = document.createElement('div');
elem.id = 'notify';
elem.style.display = 'none';
elem.style.position = 'absolute';

window.addEventListener("resize", function(event) {
    if(document.body.clientWidth > 1400){
        elem.style.bottom = '110px';
    }else if(document.body.clientWidth >= 1080 && document.body.clientWidth <= 1400){
        elem.style.bottom = '125px';
    }else if(document.body.clientWidth < 1080){
        elem.style.bottom = '440px';
    }
})

form.appendChild(elem);

input.addEventListener('invalid', function(event){
    event.preventDefault();
    if(!event.target.validity.valid){
        elem.textContent = 'Please insert a valid email';
        elem.className = 'input error';
        elem.style.display = 'block';

        input.className = 'input invalid';
    }
});

input.addEventListener('input', function(event){
    if(elem.style.display == 'block'){
        input.className = 'input';
        elem.style.display = 'none';
    }
});