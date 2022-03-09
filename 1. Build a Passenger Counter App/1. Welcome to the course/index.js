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
    
} 

//  / 7:44:19
