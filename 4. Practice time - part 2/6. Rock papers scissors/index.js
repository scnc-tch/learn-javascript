let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function randomHands(){
    let r = Math.floor(Math.random() * 3);
    let message = hands[r];
        console.log(message)
}



randomHands()