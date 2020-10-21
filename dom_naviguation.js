  var child = document.firstChild.name; //nom du premier enfant du doc
  typeof document.firstChild;   //idem
  var = document.firstChild.NodeName;//idem, pointe sur le même objet
  var = document.lastChild.NodeName;// nom du noeud du dernier enfant
  var = document.childNodes.NodeName;// nom de tout les enfants

//bouton appel de fonction appeller fNode
//oit afficher le contenu du DOM
//text dans le </title>
//mettre un name à notre head

var lastTag = document.lastChild.nodeName;
console.log(lastTag); //HTML

//l'entête est le premier enfant du HTML
var entete = document.getElementsByTagNames(html)[0].firstChild.nodeName;
console.log(entete);

var titre = document.getElementsByTagNames(html)[0].firstChild.childNodes[0]

var titre = document.getElementsByTagName(html)[0].firstChild.childNodes[0].nodeType;
	if (titre==3) titre = "TEXT_NODE";
    console.log(titre);

var titre = document.getElementsByTagName(html)[0].firstChild.childNodes[0].nodeName;
  console.log(titre);

var objEntete = document.getElementsByTagName(html)[0].firstChild;
  console.log(objEntete);

var objTitle = document.getElementsByTagName(head)[0].firstChild.nextSibling;
  console.log(objTitle);

var objTitle = objEntete.firstChild.nextSibling;
  console.log(objTitle);
