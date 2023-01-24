export default class Utilisateurs {

  // Attributs

  id = 0;
  nom = "";
  email = "";
  motDePasse = "";
  role = "client";

  // Contructeur

  constructor(nom, email, motDePasse) {
    this.nom = nom;
    this.email = email;
    this.motDePasse = motDePasse;
  }
}
