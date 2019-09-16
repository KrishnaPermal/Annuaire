//Objet
/*let telephone = {
            name: "One Plus",
            color: "Black Night",
            age: 1,
            modele: 2018
            }

//Objet
let food = new Object();
food.name = "Kebab";
food.choix = "Poulet";
food.quantity = 2;
 
//Affiche tout les propertyName = propertyValue
console.log(telephone);

//Affiche propertyValue de la property name
console.log(telephone.name);


//Affiche tout les propertyValue en boucle
for (var property in telephone)
{
    console.log(telephone[property]);
}


console.log(food);

//Affiche tout les propertyValue en boucle
for (var property in food)
{
    console.log(food[property]);
}*/

/*

//Objet annuaire
let annuaire = {
    'patricia': '06 66 66 66 66',
    'david': '07 77 77 77 77',
    rechercher: function(){
    let nom = prompt("Entrer le prénom:");
    alert(nom + " son numéro est: " + annuaire[nom]);
    }
};


let choix = prompt("Entrer 'r' si vous voulez rechercher, 'l' pour afficher la liste, 'a' pour ajouter ou 's' pour supprimer.");

if (choix === 'r'){    
annuaire.rechercher();
}else if (choix === 'l'){
//Affiche nom + num dans console
for (let property in annuaire){
    console.log(property + " : " + annuaire[property]);  
  }
}else if(choix === 'a'){
    
}else if(choix === 's'){

}else{
alert("Je n'ai pas compris votre requête !");    
}

*/


//CODE CORRECTION COLLECTIF
/*
// le repertoire 
let Repertoire = {
  annuaire : {
    patricia : "06 66 66 66 66",
    david : "03 21 55 54 78",
  },
    
  
  	rechercher: function()
		{
  	let nom = prompt("Donner un nom");
  	alert('Numero associe : ' + repertoire.annuaire[nom]);
		},
  
		liste: function()
		{
  		for(let i in repertoire.annuaire) {
  		console.log(i + ' ' + repertoire.annuaire[i]);
  		}
		},
  
    ajoute: function() {
      let ajoutNom = prompt("ajout nom");
    	let ajoutNumber = prompt("ajout numero");
      let objet = repertoire.annuaire;
    	Object.defineProperty(objet, ajoutNom,
                            {value: ajoutNumber;
                            });
    },
   supprimer: function() {
    let proprieteASupprimer = prompt("Que voulez vous supprimez ?"); 
    delete repertoire.annuaire[proprieteASupprimer];
   }
};



let action = true;

for(;action == true;){
  
let choix = prompt("Que voulez vous faire ?");

if (choix === "r"){
	repertoire.rechercher();
}

else if (choix === "l"){
	repertoire.liste();
}
else if (choix === "a"){
  repertoire.ajoute();
}

else if (choix === "s"){
  repertoire.supprimer();
}
  else if (choix === "q"){
  action = false;
}
}

*/

//CORRECTIF CEDRIC
let Repertoire = {
  annuaire :{
    'luke' : '0666666666',
    'yoda' : '0688888888',
  },
  
  //rechercher le numero en function du nom
  rechercher :function(){
    let nom = prompt('donner le nom d\'un ami');
    alert('numéro associé: ' + Repertoire.annuaire[nom]);
    },
  //supprimer
  supprimer : function(){
    let nom = prompt('donner le nom de l\'ami à supprimer du répertoire');
    delete Repertoire.annuaire[nom];
  },
  //ajouter un nom et tel
  ajouter : function(){
    let nom = prompt('donner le nom de l\'ami à ajouter');
    let num = prompt('donner son numéro de téléphone');
    Repertoire.annuaire[nom] = num;
  }
};

// non demandé dans l'énoncé, juste pour vérifier le bon fonctionnement dans la console:
console.log('[debug] Repertoire:', Repertoire);
// l'utilisateur peut effectuer plusieurs opération, jusqu'à ce qu'il presse "q"
for (let choix; choix != 'q';) {
  console.log(choix);
  choix = prompt('fonction: (r)echerche, (l)iste, (a)jout, (s)uppression, ou (q)uitter ?');
  if (choix === 'r') {
    Repertoire.rechercher();
  } else if (choix === 'l') {
    for (let nom in Repertoire.annuaire) {
      console.log(nom, ':', Repertoire.annuaire[nom]);
    }
  } else if (choix === 'a') {
    Repertoire.ajouter();
  } else if (choix === 's') {
    Repertoire.supprimer();
  }
}

