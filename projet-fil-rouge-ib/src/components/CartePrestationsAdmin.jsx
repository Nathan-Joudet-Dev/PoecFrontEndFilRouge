import React, { useState, useEffect } from 'react';
import '../styles/cartePrestationAdmin.css'
import Service from '../assets/ApiService';

const CartePrestationsAdmin = ({ prestation, informationsAdmin, coutTotal }) => {

    const [prixMinimum, setPrixMinimum] = useState(0);
    const [prixMoyen, setPrixMoyen] = useState(0);
    const [prixMaximum, setPrixMaximum] = useState(0);

    const _service = new Service();

    const getCouleur = (etat) => {
        switch (etat) {
            case "Disponible":
            case "En attente de validation du panier":
                return "#d5d8e4";
            case "En attente de validation du devis":
                return "#FFA500";
            case "En attente d'acceptation du devis":
                return "#5EE95B";
            case "Prestation Refusée":
            case "Devis Refusé":
                return "#FF0000";
            case "En Cours":
                return "#E0FFFF";
            case "Prestation Terminée":
                return "#ffd814";
            case "Archivée":
                return "#999999";
            default:
                return "#FFFFFF";
        }
    };

    useEffect(() => {
        async function fetchPrix() {
            const prestations = await _service.recupererPrestationsAdmin();
            const prestationsUniques = await prestations.filter((prestations) => prestations.titre === prestation.titre);
            const prixTotalPrestations = await prestationsUniques.map((prestation) => prestation.devis.coutTotal);

            if (prestationsUniques.length > 0) { // Condition pour éviter les erreurs si la liste est vide
                const prixMin = await prixTotalPrestations.reduce((acc, coutTotal) => Math.min(acc, coutTotal), prixTotalPrestations[0]);
                const prixMax = await prixTotalPrestations.reduce((acc, coutTotal) => Math.max(acc, coutTotal));
                const prixMoy = (prixMin + prixMax) / 2;

                setPrixMinimum(prixMin);
                setPrixMoyen(prixMoy);
                setPrixMaximum(prixMax);
            }
        }
        fetchPrix();
    }, []);

    return (
        <div className="cartePrestationPanier">
            <div className="imagePrestation">
                <img src={prestation.image} alt="Prestation" />
            </div>
            <div className="infosPrestation">
                <div className="FirstRow">
                    <p className="titrePrestation">{prestation.titre} </p>
                    <p
                        className="EtatPrestation"
                        hidden={
                            prestation.etat === "Disponible" ||
                            prestation.etat === "En attente de validation du panier"
                        }
                        style={{ backgroundColor: getCouleur(prestation.etat) }}
                    >
                        {prestation.etat}
                    </p>
                    <span className="spanNoteMoyenne" hidden={prestation.etat != "Archivée"} >Note moyenne : {prestation.noteMoyenne}/5 </span>
                </div>
                {coutTotal && (
                    <p className="prixPrestation">{prestation.devis.coutTotal} €</p>
                )}
                <div className="descriptionPrestation">{prestation.description}</div>
                {informationsAdmin && (
                    <div className="informationsAdmin">
                        <p>Prix <b>minimum</b> : {prixMinimum} € </p>
                        <p>Prix <b>moyen</b> : {prixMoyen} € </p>
                        <p>Prix <b>maximum</b> : {prixMaximum} € </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartePrestationsAdmin;