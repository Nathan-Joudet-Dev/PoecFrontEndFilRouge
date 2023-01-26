import React from 'react';
import Service from "../assets/ApiService";
import "../styles/cartePrestationPanier.css";
import { useEffect, useState } from 'react';
import CreationDevis from './CreationDevis';
import { useNavigate } from 'react-router-dom';

const CartePrestationsPrestataire = ({ prestation }) => {

    const _service = new Service();
    const _navigate = useNavigate();

    const [prestataire, setPrestataire] = useState({});
    const [panier, setPanier] = useState([]);
    const [prestationTerminee, setPrestationTerminee] = useState();
    const [prestationTermineeDesDeuxCotes, setPrestationTermineeDesDeuxCotes] = useState(false);


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

    /**
     * Valide la prestation côté prestataire, puis vérifie si le client a également validé la prestation
     */
    const ValiderFinPrestation = async () => {
        prestation.validationPrestataire = true;
        await _service.modifierPrestations(prestation.id, prestation);
        terminerPrestation();
        verifierEtatPrestation();
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
     * Vérifie si la fin de la prestation a été validée des 2 côtés
     */
    const verifierEtatPrestation = async () => {
        const prestationAverifier = await _service.recupererPrestationById(prestation.id);
        if (prestationAverifier.validationClient == true && prestationAverifier.validationPrestataire == true) {
            prestationAverifier.etat = "Terminée";
            await _service.modifierPrestations(prestationAverifier.id, prestationAverifier);
            setPrestationTermineeDesDeuxCotes(true);
        }
    }

    /**
     * Affiche le composant de création de devis
     */
    const creerDevis = () => {

        localStorage.setItem("idPrestation", prestation.id)
        _navigate('/creationDevis')
    }

    return (
        <>
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
                        <button className="terminer" onClick={ValiderFinPrestation} hidden={prestation.etat != "En cours"} >
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
                        <button className='accepterService' onClick={creerDevis} hidden={prestation.etat != "En attente du devis"}>
                            Créer le devis
                        </button>
                        <button className='accepterService' hidden={prestation.etat != "En attente d'acceptation du devis"}>
                            Devis envoyé
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartePrestationsPrestataire;