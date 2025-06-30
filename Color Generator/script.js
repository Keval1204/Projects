let btn = document.querySelector('button');

btn.addEventListener("click", function () {
    let h1 = document.querySelector("h1");
    h1.innerText = randColour();
    let div = document.querySelector("div");
    div.style.backgroundColor = randColour();
});

function randColour() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let randColour = `rgb(${red}, ${green}, ${blue})`;
    return randColour;


}

