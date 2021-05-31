const comentary1 = document.querySelector('.com_1');
const comentary2 = document.querySelector('.com_2');
const comentary3 = document.querySelector('.com_3');
const comentary4 = document.querySelector('.com_4');

let value = [8, 50, 92, 126];

let com1 = comentary1.style.left = value[0] + "%";
let com2 = comentary2.style.left = value[1] + "%";
let com3 = comentary3.style.left = value[2] + "%";
let com4 = comentary4.style.left = value[3] + "%";

let i = 0;

const Change = () => {

    let z1 = comentary1.style.zIndex = "1";
    let z2 = comentary2.style.zIndex = "1";
    let z3 = comentary3.style.zIndex = "1";
    let z4 = comentary4.style.zIndex = "1";

    if(com1 == 8+"%"){
        z4 = comentary4.style.zIndex = "0";
        com1 = comentary1.style.left = value[i+1] + "%";
        comentary2.style.left = value[i+2] + "%";
        comentary3.style.left = value[i+3] + "%";
        comentary4.style.left = value[i] + "%";
    } else if(com1 == 50+"%"){
        z3 = comentary3.style.zIndex = "0";
        com1 = comentary1.style.left = value[i+2] + "%";
        comentary2.style.left = value[i+3] + "%";
        comentary3.style.left = value[i] + "%";
        comentary4.style.left = value[i+1] + "%";
    }else if(com1 == 92+"%"){
        z2 = comentary2.style.zIndex = "0";
        com1 = comentary1.style.left = value[i+3] + "%";
        comentary2.style.left = value[i] + "%";
        comentary3.style.left = value[i+1] + "%";
        comentary4.style.left = value[i+2] + "%";
    }else if(com1 == 126+"%"){
        z1 = comentary1.style.zIndex = "0";
        com1 = comentary1.style.left = value[i] + "%";
        comentary2.style.left = value[i+1] + "%";
        comentary3.style.left = value[i+2] + "%";
        comentary4.style.left = value[i+3] + "%";
    }
}

const interval = () =>{
    setInterval(Change, 5000);
}

interval();

