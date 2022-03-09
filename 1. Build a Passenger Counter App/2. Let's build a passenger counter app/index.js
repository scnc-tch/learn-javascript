
/*
let count = 0;
let elementCount = document.getElementById('count');

function incrementCount(){
    count += 1;
    elementCount.textContent = count;
}

function save(){ 
    let foo = count + ' - ';
    let oof = document.getElementById("save-el").textContent += foo;
    count = 0;
    elementCount.textContent = count;
    
} */

//Practice 

let firstName = 'Miguel';
let lastName = 'Correa';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

 function greeting(){
     let greetingSt = 'Hi there,';
     let fullMessg = greetingSt + ' ' + firstName + "!";
     console.log(fullMessg);
 }


 let myPoints = 3;

 function add3Points(){
    myPoints += 3;
    console.log(myPoints);
 }

 function remove1Point(){
     myPoints -= 1;
    console.log(myPoints);

 }

 add3Points()
 add3Points()
 add3Points()
 remove1Point()
 remove1Point()