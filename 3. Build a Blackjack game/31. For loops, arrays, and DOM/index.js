let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for(let u = 0; u < sentence.length; u++){
    greetingEl.textContent += sentence[u];
}


