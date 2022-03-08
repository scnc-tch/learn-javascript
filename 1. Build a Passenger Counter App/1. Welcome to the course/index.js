// document.getElementById('').innerText = ''

let count = 0;
let elementCount = document.getElementById('count');

function incrementCount(){
    count = count + 1;
    elementCount.innerText = count
}

function save() {
    console.log(count);
}

// 46:12 / 7:44:19