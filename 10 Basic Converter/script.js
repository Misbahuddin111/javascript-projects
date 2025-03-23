
document.getElementById("convert").addEventListener('submit', function (event) {
    event.preventDefault();
    let distance = parseFloat(document.getElementById("distance").value);
    let answer = document.getElementById("answer");
    if (distance) {
        let conversion = (distance * 1.60934).toFixed(3);
        answer.innerHTML = `<h2>${distance} converts to ${conversion} kms</h2>`;


    }
    else {
        answer.innerHTML = `<h2> Its not a number please Provide a number</h2>`;
    };

});