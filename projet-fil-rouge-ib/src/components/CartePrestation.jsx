import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/cartePrestation.css'
import Service from '../assets/ApiService';
import Prestations from '../models/prestations';

const CartePrestation = ({ prestation }) => {

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

    /**
     * Ajoute la prestation au panier du client et affiche un message de confirmation
     */
    async function ajouterAuPanier() {

        const nouvellePrestation = new Prestations(
            prestation.titre,
            prestation.description,
            prestation.tauxHoraires,
            prestation.prestataire,
            prestation.image,
            prestation.type
        )
        nouvellePrestation.client = client.nom;
        nouvellePrestation.etat = 'En attente de validation du panier';

        await _service.creerPrestations(nouvellePrestation);
        await _service.ajouterPrestationAuPanier(client.id, nouvellePrestation);
        alert('Prestation ajoutée au panier !')
    }

    return (
        <div className='cartePrestation'>
            <div className='imagePresta' >
                <img src={prestation.image} alt="Prestation" />
            </div>
            <div className='infosPresta'>
                <p className='titrePresta'>{prestation.titre}</p>
                <p className='prixPresta'>{prestation.tauxHoraires} €</p>
                <div className='descriptionPresta'>{prestation.description}</div>
            </div>
            <div className='detailsEtPanier'>
                <button className='btnDetails'>Détails</button>
                <button className='btnAjouter' onClick={ajouterAuPanier}>Ajouter au panier</button>
            </div>
        </div>
    );
};

export default CartePrestation;