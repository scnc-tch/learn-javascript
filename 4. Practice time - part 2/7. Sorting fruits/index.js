let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.


function sortFruit(){
    for( f = 0; f < fruit.length; f++){
        if ( fruit[f] === "🍎"){
            appleShelf.textContent += "🍎"
        } else if( fruit[f] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}

