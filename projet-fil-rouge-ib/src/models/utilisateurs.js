export default class Utilisateurs {
  // Attributs
  nom = "";
  email = "";
  motDePasse = "";
  role = ""; // (client, admin, prestataire)
  panier = [];

  // Contructeur
  constructor(nom, email, motDePasse) {
    this.nom = nom;
    this.email = email;
    this.motDePasse = motDePasse;
    this.role = "prestataire";
  }
}
