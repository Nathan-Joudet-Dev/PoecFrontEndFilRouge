export default class Prestataires {

    // Attributs

    id = 0;
    nomSociete = "";
    email = "";
    motDePasse = "";
    role = "prestataire";
    panier = [];
    logo = "";
    description = "";
    telephone = "";
    adresse = "";
    pays = "";
    siret = "";
    ville = "";
    effectif = "";
    domaine = "";
    zoneGeo = "";
    typeDePrestation = "";

    // Contructeur

    constructor(nomSociete, email, motDePasse, logo, description, telephone, adresse, pays, siret, ville, effectif, domaine, zoneGeo, typeDePrestation) {
        this.nomSociete = nomSociete;
        this.email = email;
        this.motDePasse = motDePasse;
        this.logo = logo;
        this.description = description;
        this.telephone = telephone;
        this.adresse = adresse;
        this.pays = pays;
        this.siret = siret;
        this.ville = ville;
        this.effectif = effectif;
        this.domaine = domaine;
        this.zoneGeo = zoneGeo;
        this.typeDePrestation = typeDePrestation;
    }
}