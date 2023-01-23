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

    return (
        <div className='cartePrestationPanier'>
            <div className='imagePrestation' >
                <img src={prestation.image} alt="Prestation" />
            </div>
            <div className='infosPrestation'>
                <div className="FirstRow">
                <p className='titrePrestation'>{prestation.titre} </p>
                <div class="etat">
                <p className='EtatPrestation'>Prestation Terminée</p>
                <p className='Notation'>Notation </p>
                </div>
                </div>
                <p className='prixPrestation'>{prestation.tauxHoraires} €</p>
                <div className='descriptionPrestation'>{prestation.description}</div>
            </div>

        </div>
    );
};

export default CartePrestationPanier;