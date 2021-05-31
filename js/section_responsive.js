const responsive = document.querySelector('.comentary_responsive');
const span1 = document.querySelector('.span1');
const span2 = document.querySelector('.span2');
const span3 = document.querySelector('.span3');
const span4 = document.querySelector('.span4');
const img_responsive = document.querySelector('.img_responsive');
const name_responsive = document.querySelector('.name_responsive');
const text_responsive = document.querySelector('.text_responsive');


window.addEventListener("resize", function(event) {
    if(document.body.clientWidth > 500){
        responsive.style.display = "none";
    }else{
        responsive.style.display = "flex";
    }
})

span1.addEventListener("click", () =>{
    span1.style.background = "#f25f3a";
    span2.style.background = "#eee";
    span3.style.background = "#eee";
    span4.style.background = "#eee";
    img_responsive.src = "../scss/images/avatar-anisha.png";
    name_responsive.innerHTML = "Anisha Li";
    text_responsive.innerHTML = "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.";
})

span2.addEventListener("click", () =>{
    span2.style.background = "#f25f3a";
    span1.style.background = "#eee";
    span3.style.background = "#eee";
    span4.style.background = "#eee";
    img_responsive.src = "../scss/images/avatar-ali.png";
    name_responsive.innerHTML = "Ali Bravo";
    text_responsive.innerHTML = "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.";
})

span3.addEventListener("click", () =>{
    span3.style.background = "#f25f3a";
    span2.style.background = "#eee";
    span1.style.background = "#eee";
    span4.style.background = "#eee";
    img_responsive.src = "../scss/images/avatar-richard.png";
    name_responsive.innerHTML = "Richard Watts";
    text_responsive.innerHTML = "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!";
})

span4.addEventListener("click", () =>{
    span4.style.background = "#f25f3a";
    span2.style.background = "#eee";
    span3.style.background = "#eee";
    span1.style.background = "#eee";
    img_responsive.src = "../scss/images/avatar-shanai.png";
    name_responsive.innerHTML = "Shanai Gough";
    text_responsive.innerHTML = "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.";
})