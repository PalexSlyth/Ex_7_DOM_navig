  //var child = document.firstChild.name; //nom du premier enfant du doc
  //typeof document.firstChild;   //idem
//  var = document.firstChild.NodeName;//idem, pointe sur le même objet
//  var = document.lastChild.NodeName;// nom du noeud du dernier enfant
//  var = document.childNodes.NodeName;// nom de tout les enfants

//bouton appel de fonction appeller fNode
//oit afficher le contenu du DOM
//text dans le </title>
//mettre un name à notre head
function fNode(){
  var HTML = document.firstChild.name;
  console.log("fNode"); // fNode
  console.log(HTML); //undefined
  console.log(typeof(HTML)); //undefined
  console.log(typeof(document.firstChild)); //object

  HTML = document.firstChild.nodeName;
  console.log(HTML); //HTML

  HTML = document.lastChild.nodeName;
  console.log(HTML); //HTML

  HTML = document.childNodes;
  console.log(HTML); //NodeList [html]

  var entete = document.getElementsByTagName('html')[0].firstChild.nodeName;
  console.log(entete); //HEAD

  var titre = document.getElementsByTagName('html')[0].firstChild.childNodes[0].nodeType;
  if (titre==3) titre = "TEXT_NODE";
  console.log(titre); //TEXT_NODE

  var titre = document.getElementsByTagName('html')[0].firstChild.childNodes[0].nodeName;
  console.log(titre); //#text

  var objEntete = document.getElementsByTagName('html')[0].firstChild;
  console.log(objEntete); // > <head name="HEAD"> </head>

  var objTitle = document.getElementsByTagName('head')[0].firstChild.nextSibling;
  console.log(objTitle); //<meta charset="utf-8" lang="en">

  var objTitle = objEntete.firstChild.nextSibling;
  console.log(objTitle); //<meta charset="utf-8" lang="en">

  var titreValue = objTitle.innerHTML; //Texte contenu dans le titre
  console.log(titreValue);

  var titreValue = objTitle.childNodes[0].nodeValue; //Texte contenu dans le titre
  console.log('texte du title: ' + titreValue);

  var titreValue = objTitle.firstChild.nodeValue; //Texte contenu dans le titre
  console.log('texte du title : ' + titreValue);
}

var para = document.createElement("p");
