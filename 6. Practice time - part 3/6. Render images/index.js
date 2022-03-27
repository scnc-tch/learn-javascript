// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

render(imgs)


function render(arr){
    const div = document.getElementById("container")
    let imgsDOM = ""
    for(i = 0; i < arr.length; i++){
        imgsDOM += `<img class="team-img" src="${arr[i]}">`
    }
    div.innerHTML = imgsDOM

}

