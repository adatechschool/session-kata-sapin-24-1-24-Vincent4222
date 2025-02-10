function afficherPointeSapin(hauteur) {
  
  let espacesEtoile = "";
  for (let i = 0; i < hauteur - 1; i++) {
      espacesEtoile += " ";
  }
  console.log(espacesEtoile + "+");

  for (let i = 0; i < hauteur; i++) {
      let ligne = "";
      
      for (let j = 0; j < hauteur - i - 1; j++) {
          ligne += " ";
      }
      // Guauche
      ligne += "/";
      for (let j = 0; j < i; j++) {
          ligne += "*";
      }
      //Tronc
      ligne += "|";
      
      for (let j = 0; j < i; j++) {
          ligne += "*";
      }
      //Droite 
      // ligne += "\ "; ne marche pas, pas d'affichage
      ligne += "%";
      
      console.log(ligne);
  }
}

function afficherSapin(etages, hauteur_etage) {

  let espacesEtoile = "";
  for (let i = 0; i < hauteur_etage + etages - 1; i++) {
      espacesEtoile += " ";
  }
  console.log(espacesEtoile + "+");


  for (let etage = 0; etage < etages; etage++) {
      let hauteurActuelle = hauteur_etage + etage;
      
      for (let i = 0; i < hauteurActuelle; i++) {
          let ligne = "";
          
          for (let j = 0; j < hauteur_etage + etages - etage - i - 1; j++) {
              ligne += " ";
          }
          // Guauche
          ligne += "/";
          for (let j = 0; j < i + etage; j++) {
              ligne += "*";
          }
          
          // Tronc
          ligne += "|";
          
          // Droite
          for (let j = 0; j < i + etage; j++) {
              ligne += "*";
          }
           // ligne += "\ "; ne marche pas, pas d'affichage
          ligne += "%";
          
          console.log(ligne);
      }
  }
}

afficherPointeSapin(3);
afficherSapin(3, 3);
