export default class Devis {

    // Attributs
    id;
    detailsMateriel;
    coutMateriel;
    tempsEstime;
    coutTotal;

    // Constructeur
    constructor(detailsMateriel, coutMateriel, tempsEstime, coutTotal) {
        this.detailsMateriel = detailsMateriel;
        this.coutMateriel = coutMateriel;
        this.tempsEstime = tempsEstime;
        this.coutTotal = coutTotal;
    }
}
