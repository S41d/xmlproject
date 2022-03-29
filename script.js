let checkBoxNom = document.querySelector("#filterNom")
let checkBoxMarque = document.querySelector("#filterMarque")
let divResult = document.querySelector("#results")
let inputSearch = document.querySelector("#search")

inputSearch.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) { // 13 = "Entrer"
        event.preventDefault();
        search()
    }
});

function search() {
    let parser = new DOMParser()
    let lien = "https://raw.githubusercontent.com/S41d/xmlproject/main/Projet.xml"
    fetch(lien)
        .then((res) => res.text())
        .then((res) => {
            let xml = parser.parseFromString(res, "text/xml");
            divResult.innerHTML =
                xpathRequest(xml, inputSearch.value)
        })
}

function xpathRequest(file, searchTerm) {
    let evaluateString = `//article`;
    let argExists = false; // pour vérifier si on a au moins un argument de recherche
    if (checkBoxNom.checked === true) {
        evaluateString += `[contains(nom/text(),'${ searchTerm }')`
        argExists = true;
    }
    if (checkBoxMarque.checked === true) {
        if (argExists) evaluateString += ` or contains(marque/text(),'${ searchTerm }')`
        else evaluateString += `[contains(marque/text(),'${ searchTerm }')`
        argExists = true
    }
    if (argExists) evaluateString += "]"
    console.log(evaluateString)
    let articles = file.evaluate(evaluateString, file, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    let htmlString = ""
    for (let i = 0; i < articles.snapshotLength; i++) {
        let imgPos = 4
        if (articles.snapshotItem(i).children.length === 7) { // si l'article est en promotion l'emplacement de la balise img change
            imgPos = 5
        }
        if (articles.snapshotItem(i).children[imgPos] == null) {
            console.log(articles.snapshotItem(i))
        }
        console.log(articles.snapshotItem(i))
        htmlString += `
          <div class="article">
            <img class="img-article" src="${ articles.snapshotItem(i).children[imgPos].getAttribute("src") }" alt="">
            <div class="text-article">${ articles.snapshotItem(i).children[0].innerHTML }</div> 
          </div>`
    }
    htmlString += "<br>" + articles.snapshotLength + " articles trouvé(s)"
    return htmlString
}
