import React from 'react';
import Service from "../assets/ApiService";
import "../styles/cartePrestationPanier.css";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartePrestationsPrestataire = ({ prestation }) => {

    const _service = new Service();
    const _navigate = useNavigate();

    const [prestataire, setPrestataire] = useState({});
    const [panier, setPanier] = useState([]);
    const [prestationTerminee, setPrestationTerminee] = useState(false);


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
                return "#999999";
            default:
                return "#FFFFFF";
        }
    };

    /**
     * Valide la prestation côté prestataire, puis vérifie si le client a également validé la prestation
     */
    const ValiderFinPrestation = async () => {
        prestation.validationPrestataire = true;
        await _service.validerFinPrestationPrestataire(prestation);
        terminerPrestation();
        window.location.reload();
    };

    /**
     * Accepte le service et passe l'état de la prestation à "En attente du devis"
     */
    const accepterService = async () => {
        prestation.etat = "En attente du devis";
        await _service.modifierPrestations(prestation.id, prestation);
        window.location.reload()
    }

    /**
     * Refuse le service et passe l'état de la prestation à "Prestation Refusée"
     */
    const refuserService = async () => {
        prestation.etat = "Prestation Refusée";
        await _service.modifierPrestations(prestation.id, prestation);
        window.location.reload()
    }

    /**
     * Change le state pour actualiser la page
     */
    const terminerPrestation = () => {
        setPrestationTerminee(true);
    }

    /**
     * Affiche le composant de création de devis
     */
    const creerDevis = () => {

        localStorage.setItem("idPrestation", prestation.id)
        _navigate('/creationDevis')
    }

    return (
        <div className="cartePrestationPanier cartePrestataire">
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
                <p className="prixPrestation">{prestation.tauxHoraires} €</p>
                <div className="descriptionPrestation">{prestation.description}</div>
                {!prestationTerminee && (
                    <button className="terminer" onClick={ValiderFinPrestation} hidden={prestation.etat != "En cours"} >
                        Terminer cette Prestation
                    </button>
                )}
                <div className='boutonsAccepterRefuser'>
                    <button className='accepterService' onClick={accepterService} hidden={prestation.etat != "Demande envoyée"} >
                        Accepter
                    </button>
                    <button className='refuserService' onClick={refuserService} hidden={prestation.etat != "Demande envoyée"} >
                        Refuser
                    </button>
                    <button className='accepterService' onClick={creerDevis} hidden={prestation.etat != "En attente du devis"}>
                        Créer le devis
                    </button>
                    <button className='accepterService' hidden={prestation.etat != "En attente d'acceptation du devis"}>
                        Devis envoyé
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartePrestationsPrestataire;