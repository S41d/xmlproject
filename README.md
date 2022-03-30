# [Projet L3 xml](https://github.com/S41d/xmlproject)

### ❗ **Important**

> Le fichier [ProjetXML.xml](ProjetXML.xml) ne fait pas partie de notre projet.
> On le garde, car le compte github d'un de nos camarades ne marchait pas et il avait besoin de mettre son fichier xml en ligne,
> car on ne peut pas accéder aux fichiers locaux avec la fonction fetch de javascript à cause des problèmes de CORS.

Ce projet est réalisé par :
- BAH Boubacar Aissata
- N’GUESSAN MOYE Oka
- ZUHAIR Saïd Mohammad

Nous avons choisi d'utiliser un catalogue des articles du site Decathlon pour réaliser notre projet.
Notre base complète de données en **XML** se trouve dans le fichier [Projet.xml](Projet.xml), 
son **DTD** se trouve dans [Projet.dtd](Projet.dtd), 
et son **XSchema** dans [projet_x_schema.xsd](projet_x_schema.xsd).


Le fichier [script.js](script.js) contient le code javascript qu'on utilise pour **la barre de recherche**. 
Il est intégré dans [Projet.html](Projet.html) qui lui-même est généré en utilisant **XSLT** et le fichier [projet.xsl](projet.xsl). Pour lancer une recherche cochez un checkbox et mettez le texte pour la recherche et appuyer sur entrer. Pour afficher de nouveaux le tableau des articles, décochez tous les checkboxes et après avoir cliqué sur la barre de recherche appuyez sur entrer.
Il affiche que les titres des articles trouvés. Pour voir le contenu de chaque article trouvé ainsi que la requête **XPATH** formée lors de votre recherche, vous pouvez voir le console de votre navigateur.

Le dossier images contient toutes les images qu'on utilise pour nos articles. Et finalement, le fichier [style.css](style.css) contient le code **CSS**.
