let details_form = document.querySelector("#destination_details_form");

details_form.addEventListener("submit", function (event) {
    event.preventDefault();
    let destName = event.target.elements["name"].value;
    let destLocation = event.target.elements["location"].value;
    let destPhoto = event.target.elements["photo"].value;
    let destDesc = event.target.elements["description"].value;


    for(let i =0; i< details_form.length; i++){
        details_form.element.value[i] = "";
    }
    

    let whishList= document.getElementById("destinations_container");
    if(whishList.children.length === 0){
        document.getElementById("title").innerHTML ="My whish list";
    }
});

function createdisCard(name, location, photo, description){
    let card = document.createElement('div');
    card.className = "card";
    let image = document.createElement('img');
      image.setAttribute("alt", name);
      let constantPhotoUrl = "images/signpost.jpg";

      if(photoUrl === 0){
        setAttribute("src", constantPhotoUrl);
      }
      else{
        setAttribute("src", photoUrl);
      }
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    let cardTitle = document.createElement("h3");
    cardTitle.innerHTML = name;
    cardBody.appendChild(cardTitle);

    let cardSubtitle = document.createElement("h4");
    cardSubtitle.innerText= location;
    cardBody.appendChild(cardSubtitle);

    if(description.length !== 0){
        let cardText = document.createElement("p");
        cardText.className= "card-text";
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }
    
}