import { useEffect, useState } from 'react';
import '../styles/cartePrestationPanier.css'
import Service from '../assets/ApiService';

const CartePrestationPanier = ({ prestation }) => {

    const _service = new Service();

    const [client, setClient] = useState({})

    useEffect(() => {
        const id = localStorage.getItem('id');

        // Récupère le client actuellement connecté
        async function fetchClient(id) {
            const clientTmp = await _service.recupererUtilisateurById(id);
            setClient(clientTmp);
        }
        fetchClient(+id)
    }, [])

    const getCouleur = (etat) => {
        switch (etat) {
            case "Disponible":
                return "#d5d8e4"
            case "En attente de validation du devis":
                return "#FFA500"
            case "En attente d'acceptation du devis":
                return "#5EE95B"
            case "Prestation Refusée":
            case "Devis Refusé":
                return "#FF0000"
            case "En Cours":
                return "#E0FFFF"
            case "Prestation Terminée":
                return "#ffd814"
            default:
                return "#FFFFFF"
        }
    }


    return (
        <div className='cartePrestationPanier'>
            <div className='imagePrestation' >
                <img src={prestation.image} alt="Prestation" />
            </div>
            <div className='infosPrestation'>
                <div className="FirstRow">
                    <p className='titrePrestation'>{prestation.titre} </p>
                    <p className='EtatPrestation' style={{ backgroundColor: getCouleur(prestation.etat) }}>{prestation.etat}</p>
                    <p className='Notation' hidden={prestation.etat != "Terminée"}>Evaluer cette Prestation </p>

                </div>
                <p className='prixPrestation'>{prestation.tauxHoraires} €</p>
                <div className='descriptionPrestation'>{prestation.description}</div>
                <button className='terminer' hidden={prestation.etat != "En Cours"}>Terminer cette Prestation</button>
            </div>

        </div>
    );
};

export default CartePrestationPanier;