let colorPicker = document.getElementById("color-picker");
let button = document.getElementById("btn");
let body = document.getElementsByName("body")

let getcolor = ()=>{
    let randomnmbr = Math.floor( Math.random() * 16777215 );
    let randomcolor = "#"+ randomnmbr.toString(16);
    document.body.style.backgroundColor = randomcolor;
    colorPicker.innerText = randomcolor;
    console.log(randomnmbr, randomcolor);
    navigator.clipboard.writeText(randomcolor);
    
}

button.addEventListener("click",()=>{
    getcolor();
})


getcolor();




