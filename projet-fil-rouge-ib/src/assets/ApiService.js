import axios from "axios";
const _url = "http://localhost:3001";

export default class Service {
  // ********** Utilisateurs **********

  /**
   * Récupère la liste des utilisateurs (clients et admin)
   * @returns La liste des utilisateurs
   */
  async recupererUtilisateurs() {
    const response = await axios.get(_url + "/utilisateurs");
    const utilisateurs = await response.data;
    return utilisateurs;
  }

  /**
 * Récupère l'utilisateur correspondant à l'id
 * @param {number} id L'id de l'utilisateur à rechercher
 * @returns L'utilisateur correspondant à l'id
 */
  async recupererUtilisateurById(id) {
    const response = await this.recupererUtilisateurs();
    const utilisateur = await response.find(
      (utilisateur) => utilisateur.id === id
    );
    return utilisateur;
  }

  /**
   * Récupère la liste des prestataires
   * @returns La liste des prestataires
   */
  async recupererPrestataires() {
    const response = await axios.get(_url + "/prestataires");
    const prestataires = await response.data;
    return prestataires;
  }

  /**
   * Récupère le prestataire correspondant à l'id
   * @param {number} id 
   * @returns Le prestataire correspondant à l'id
   */
  async recupererPrestataireById(id) {
    const response = await this.recupererPrestataires();
    const prestataire = await response.find(
      (prestataire) => prestataire.id === id
    );
    return prestataire;
  }

  /**
   * Crée un nouvel utilisateur
   * @param {Utilisateurs} utilisateur L'utilisateur à créer
   * @returns L'utilisateur qui vient d'être créé
   */
  async creerUtilisateur(utilisateur) {
    return axios
      .post(_url + "/utilisateurs", utilisateur)
      .then((res) => res.data);
  }

  /**
   * Crée un nouveau prestataire
   * @param {Prestaires} prestataire Le prestataire à créer
   * @returns Le prestataire qui vient d'être créé
   */
  async creerPrestataire(prestataire) {
    return axios
      .post(_url + "/prestataires", prestataire)
      .then((res) => res.data);
  }

  /**
   * Met à jour le panier de l'utilisateur
   * @param {number} id L'id de l'utilisateur
   * @param {Prestations} panier Le panier de l'utilisateur
   * @returns L'utilisateur avec son panier modifié
   */
  async modifierPanierUtilisateur(id, panier) {
    const response = await axios.patch(
      _url + `/utilisateurs/${id}`,
      panier
    );
    const utilisateurModifie = response.data;
    return utilisateurModifie;
  }

  /**
   * Met à jour le panier du prestataire
   * @param {number} id 
   * @param {Prestations} panier 
   * @returns Le prestataire avec son panier modifié
   */
  async modifierPanierPrestataire(id, panier) {
    const response = await axios.patch(
      _url + `/prestataires/${id}`,
      panier
    );
    const prestataireModifie = response.data;
    return prestataireModifie;
  }

  // ********** Prestations **********

  /**
   * Récupère la liste des prestations
   * @returns La liste des prestations
   */
  async recupererPrestations() {
    const response = await axios.get(_url + "/prestations");
    const prestatations = await response.data;
    return prestatations;
  }

  /**
   * Récupère la liste des prestations en cours, terminées ou archivées
   * @returns La liste des prestations en cours, terminées ou archivées
   */
  async recupererPrestationsEnCoursOuTerminees() {
    const response = await this.recupererPrestations();
    const prestationsEnCoursOuTerminees = response.filter(
      (prestation) =>
        prestation.etat === "En cours" ||
        prestation.etat === "Terminée" ||
        prestation.etat === "Archivée"
    );
    return prestationsEnCoursOuTerminees;
  }

  /**
   * Crée une nouvelle prestation
   * @param {Prestations} prestation 
   * @returns La prestation qui vient d'être créée
   */
  async creerPrestations(prestation) {
    return axios
      .post(_url + "/prestations", prestation)
      .then((res) => res.data);
  }

  /**
   * Modifie une prestation
   * @param {number} id L'id de la prestation à modifier
   * @param {string | number | boolean} informations Les informations à modifier (etat, validationPrestataire, validationClient, noteQualiteGlobale, noteCommunication, noteDossierTechnique, noteExpertise, noteMoyenne)
   * @returns La prestation modifiée
   */
  async modifierPrestations(id, informations) {
    const response = await axios.patch(
      _url + `/prestations/${id}`,
      informations
    );
    const prestationModifiee = response.data;
    return prestationModifiee;
  }
}
