fetch("https://picsum.photos/v2/list")
.then((response) => response.json())
.then((data) => {

data.forEach((elt) => {
    let author = elt.author;
    let image = elt.download_url;
    let figureElement = document.createElement("figure");
    console.log(elt);

    let authorElementName = document.createElement("img");
    authorElementName.src = image;
    figureElement.appendChild(authorElementName);
    
    let authorElement = document.createElement("figcaption");
    authorElement.textContent = author;
    figureElement.appendChild(authorElement);

    document.body.appendChild(figureElement)
})
})
