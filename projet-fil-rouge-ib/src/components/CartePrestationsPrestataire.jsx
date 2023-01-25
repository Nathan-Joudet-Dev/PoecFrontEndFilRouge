import React from 'react';
import Service from "../assets/ApiService";
import "../styles/cartePrestationPanier.css";
import { useEffect, useState } from 'react';

const CartePrestationsPrestataire = ({ prestation }) => {

    const _service = new Service();

    const [prestataire, setPrestataire] = useState({});
    const [panier, setPanier] = useState([]);
    const [devisEnvoye, setDevisEnvoye] = useState(false);
    const [prestationTerminee, setPrestationTerminee] = useState();

    useEffect(() => {
        const id = localStorage.getItem("id");

        // Récupère le prestataire actuellement connecté
        async function fetchPrestataire(id) {
            const prestataireTmp = await _service.recupererPrestataireById(id);
            setPrestataire(prestataireTmp);
            const panierTmp = await _service.recupererPanierPrestataire(prestataireTmp)
            setPanier(panierTmp);
            prestation.validationPrestataire == true ? setPrestationTerminee(true) : setPrestationTerminee(false);
        }
        fetchPrestataire(+id);
    }, []);

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
                return "#333333";
            default:
                return "#FFFFFF";
        }
    };

    const Valider = async () => {
        prestation.validationPrestataire = true;
        await _service.modifierPrestations(prestation.id, prestation);
        terminerPrestation();
        // window.location.reload();
    };

    const accepterService = async () => {
        prestation.etat = "En attente d'acceptation du devis";
        await _service.modifierPrestations(prestation.id, prestation);
        window.location.reload()
    }

    const refuserService = async () => {
        prestation.etat = "Refusée";
        await _service.modifierPrestations(prestation.id, prestation);
        window.location.reload()
    }

    const envoyerDevis = () => {
        setDevisEnvoye(true);
    }

    const terminerPrestation = () => {
        setPrestationTerminee(true);
    }

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
                </div>
                <p className="prixPrestation">{prestation.tauxHoraires} €</p>
                <div className="descriptionPrestation">{prestation.description}</div>
                {!prestationTerminee && (
                    <button className="terminer" onClick={Valider} >
                        Terminer cette Prestation
                    </button>
                )}
                {prestationTerminee && (
                    <button className="terminer">Prestation Terminée</button>
                )}
                <div className='boutonsAccepterRefuser'>
                    <button className='accepterService' onClick={accepterService} hidden={prestation.etat != "Demande envoyée"} >
                        Accepter
                    </button>
                    <button className='refuserService' onClick={refuserService} hidden={prestation.etat != "Demande envoyée"} >
                        Refuser
                    </button>
                    {!devisEnvoye && (
                        <button className='accepterService' onClick={envoyerDevis} hidden={prestation.etat != "En attente d'acceptation du devis"}>
                            Envoyer le devis
                        </button>
                    )}
                    {devisEnvoye && (
                        <button className='accepterService'>
                            Devis envoyé
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartePrestationsPrestataire;