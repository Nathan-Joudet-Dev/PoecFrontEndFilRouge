export default class Prestations {

  // Attributs

  id = 0;
  titre = "";
  description = "";
  tauxHoraires = 0;
  coutTotal = 0;
  etat = "";
  validationPrestataire = false;
  validationClient = false;
  noteQualiteGlobale = 0;
  noteCommunication = 0;
  noteDossierTechnique = 0;
  noteExpertise = 0;
  noteMoyenne = 0;
  client = "";
  prestataire = "";

  // Contructeur

  constructor(titre, description, tauxHoraires, prestataire) {
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
  }
}
