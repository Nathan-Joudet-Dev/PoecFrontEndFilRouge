import axios from "axios";
const _url = "http://localhost:3001";

export default class Service {
  // ********** Utilisateurs **********

  /**
   * Récupère la liste des utilisateurs
   * @returns La liste des utilisateurs
   */
  async recupererUtilisateurs() {
    const response = await axios.get(_url + "/utilisateurs");
    const utilisateurs = await response.data;
    return utilisateurs;
  }

  /**
   * Récupère la liste des prestataires
   * @returns La liste des prestataires
   */
  async recupererPrestataires() {
    const response = await this.recupererUtilisateurs();
    const prestataires = await response.filter(
      (utilisateur) => utilisateur.role === "prestataire"
    );
    return prestataires;
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
   * Crée un nouvel utilisateur
   * @returns L'utilisateur qui vient d'être créé
   */
  async creerUtilisateur(utilisateur) {
    return axios
      .post(_url + "/utilisateurs", utilisateur)
      .then((res) => res.data);
  }

  // ********** Prestations **********

  /**
   * Récupère la liste des prestations
   * @returns La liste des prestations
   */
  async recupererPrestations() {
    const response = await axios.get(_url + "/prestatations");
    const prestatations = await response.data;
    return prestatations;
  }

  /**
   * Récupère la liste des prestations en cours, terminées ou archivées
   * @returns La liste des prestations en cours, terminées ou archivées
   */
  async recupererPrestationsEnCoursOuTerminees() {
    const response = await this.recupererPrestations();
    const prestationsEnCoursOuTerminées = response.filter(
      (prestation) =>
        prestation.etat === "En cours" ||
        prestation.etat === "Terminée" ||
        prestation.etat === "Archivée"
    );
    return prestationsEnCoursOuTerminées;
  }

  /**
   * Modifie une prestation
   * @param {number} id
   * @param {Prestation} prestation
   * @returns La prestation modifiée
   */
  async modifierPrestations(prestation) {
    const response = await axios.put(
      _url + `/prestations/${prestation.id}`,
      prestation
    );
    const prestationModifiee = response.data;
    return prestationModifiee;
  }
}
