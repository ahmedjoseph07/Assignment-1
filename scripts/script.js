let age = document.getElementById("input-title");
console.log(age);

let btn = document.getElementById('submit');
let childcard = document.getElementById('childcard');
let adultcard = document.getElementById('adultcard');

function checkAge(){
    let ageInput = age.value;
    if(ageInput >= 18){
        childcard.style.display = "none";
        adultcard.style.display = "flex";
    }
    else if(ageInput <= 0){
        document.body.children[1].innerHTML = "<div>আরেহ ভাই কি করছেন? সঠিক বয়স দিন..বয়স কি ঋনাত্বক হয় মিয়া??</div>";

    }
    else if(ageInput < 18){
        adultcard.style.display = "none";
        childcard.style.display = "flex";
    }
}








