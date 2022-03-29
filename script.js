let checkBoxNom = document.querySelector('#filterNom')
let checkBoxMarque = document.querySelector('#filterMarque')
let divResult = document.querySelector('#results')
let inputSearch = document.querySelector('#search')
let divTable = document.querySelector('#table')

inputSearch.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        // 13 = "Entrer"
        event.preventDefault()
        search()
    }
})

function search() {
    let parser = new DOMParser()
    let lien = 'https://raw.githubusercontent.com/S41d/xmlproject/main/Projet.xml'
    fetch(lien)
        .then((res) => res.text())
        .then((res) => {
            let xml = parser.parseFromString(res, 'text/xml')
            divResult.innerHTML = xpathRequest(xml, inputSearch.value)
        })
}

function xpathRequest(file, searchTerm) {
    let evaluateString = `//article`
    if (checkBoxNom.checked === true) {
        evaluateString += `[contains(nom/text(),'${ searchTerm }')`
    }
    if (checkBoxMarque.checked === true) {
        if (checkBoxNom.checked)
            evaluateString += ` or contains(marque/text(),'${ searchTerm }')`
        else evaluateString += `[contains(marque/text(),'${ searchTerm }')`
    }
    let htmlString = ''
    let checkBoxCoche = checkBoxNom.checked || checkBoxMarque.checked
    if (!checkBoxCoche && divTable.innerHTML === '') {
        location.reload()
    }
    if (checkBoxCoche) {
        evaluateString += ']'
        divTable.innerHTML = ''
        console.log(evaluateString)
        let articles = file.evaluate(evaluateString, file,
            null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null)
        for (let i = 0; i < articles.snapshotLength; i++) {
            let imgPos = 4
            if (articles.snapshotItem(i).children.length === 7) {
                // si l'article est en promotion l'emplacement de la balise img change
                imgPos = 5
            }
            if (articles.snapshotItem(i).children[imgPos] == null) {
                console.log(articles.snapshotItem(i))
            }
            console.log(articles.snapshotItem(i))

            let colorString = ""
            for (let j = 0; j < articles.snapshotItem(i).children[3].children.length; j++) {
                console.log(articles.snapshotItem(i).children[3].children[j].getAttribute("nomCSS"))
                colorString +=
                    `<div class="color" style="border:1px white solid; background-color: ${ articles.snapshotItem(i).children[3].children[j].getAttribute("nomCSS") }"></div>`
            }

            htmlString += `
              <div class="article">
                  <img class="img-article" 
                    src="${ articles.snapshotItem(i).children[imgPos].getAttribute('src') }"
                    alt="">
                  <div class="text-article">
                  <div>${ articles.snapshotItem(i).children[0].innerHTML }</div>
                  <div>${ articles.snapshotItem(i).children[2].innerHTML }€</div>
                  <div style="display: flex; flex-direction: row;">${ colorString }</div>
                  </div> 
              </div>`
        }
        htmlString += '<br>' + articles.snapshotLength + ' articles trouvé(s)'
    }
    return htmlString
}
