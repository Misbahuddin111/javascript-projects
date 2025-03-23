


let form = document.getElementById('convert');
let heading = document.querySelector("h1");
let intro = document.querySelector("p");
let answer = document.getElementById("answer");
let convertType = "miles";

document.addEventListener("keydown", function (event) {
    let key = event.code;

    if (key === "KeyK") {
        convertType = "Kilometers";
        heading.innerHTML = "Kilometers to Miles converter";
        intro.innerHTML = "Type in a number of Kilometers and click the button to convert the distance to miles.";
    }
    else if (key === "KeyM") {
        convertType = "miles";
        heading.innerHTML = "Miles to kilometer converter";
        intro.innerHTML = "Type in a number of Miles and click the button to convert the distance to Kilometers.";


    }
});
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let distance = parseFloat(document.getElementById("distance").value);
    if (distance) {
        if (convertType === "miles") {
            let conversion = (distance * 1.609344).toFixed(3);
            answer.innerHTML = `<h2>${distance} Miles converted to ${conversion} Kilometers </h2>`
        }
        else if (convertType === "Kilometers") {
            let conversion = (distance * 0.631371192).toFixed(3);
            answer.innerHTML = `<h2>${distance} kilometers to ${conversion} Miles</h2>`;
        }
        else {
            `<h2>please provide a Number </h2>`
        }

    }

})

