import React from 'react';
import { useEffect, useState } from 'react';
import Service from '../assets/ApiService';
import '../styles/panier.css';
import CartePrestationPanier from './CartePrestationPanier';

const Panier = () => {
    const _service = new Service();

    const [client, setClient] = useState({})
    const [panier, setPanier] = useState([])

    useEffect(() => {
        const id = localStorage.getItem('id');

        // Récupère le client actuellement connecté
        async function fetchClient(id) {
            const clientTmp = await _service.recupererUtilisateurById(id);
            setClient(clientTmp);
           setPanier(clientTmp.panier);
        }
        fetchClient(+id)
    }, [])

    return (
        <div className="main">
            <h2 className="mesCommandes">MES COMMANDES</h2>

            <div className="panier">
                <div className="headerPanier"><h3 className="titrePanier">Prestations Sélectionnées</h3></div>

                <div className='PrestationsPanier'>
                {panier && (
                panier.map((prestation) => {
                    return (
                        <CartePrestationPanier key={prestation.id} prestation={prestation} />
                    )
                })
            )}

                </div>
                <div className='Total'></div>

            </div>
            
        </div>
    );
};

export default Panier;