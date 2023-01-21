export default class Prestations {

  // Attributs

  id = 0;
  titre;
  description;
  tauxHoraires;
  coutTotal;
  etat;
  validationPrestataire;
  validationClient;
  noteQualiteGlobale;
  noteCommunication;
  noteDossierTechnique;
  noteExpertise;
  noteMoyenne;
  client;
  prestataire;
  image;
  type;

  // Contructeur

  constructor(titre, description, tauxHoraires, prestataire, image) {
    this.titre = titre;
    this.description = description;
    this.tauxHoraires = tauxHoraires;
    this.coutTotal = 0;
    this.etat = "Disponible";
    this.validationPrestataire = false;
    this.validationClient = false;
    this.noteQualiteGlobale = 0;
    this.noteCommunication = 0;
    this.noteDossierTechnique = 0;
    this.noteExpertise = 0;
    this.noteMoyenne = 0;
    this.client = "";
    this.prestataire = prestataire;
    this.image = image;
    this.type = "";
  }
}
