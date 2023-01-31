import React from 'react';
import { useEffect, useState } from 'react';
import Service from '../assets/ApiService';
import '../styles/commandesClients.css';
import CartePrestationPanier from './CartePrestationPanier';

const CommandesClients = () => {

    const _service = new Service();

    const [client, setClient] = useState({})
    const [panier, setPanier] = useState([])

    useEffect(() => {
        const id = localStorage.getItem('id');

        // Récupère le client actuellement connecté
        async function fetchClient(id) {
            const clientTmp = await _service.recupererUtilisateurById(id);
            setClient(clientTmp);
            const panierTmp = await _service.recupererPanierClient(clientTmp)
            setPanier(panierTmp);
        }
        fetchClient(+id)
    }, [])

    return (
        <div className="mainCommandes">
            <div className="panierCommandes">
                <div className="headerCommandes"><h3 className="titreCommandes">Prestations Sélectionnées</h3></div>
                <div className='PrestationsCommandes'>
                    {panier && (
                        panier.map((prestation) => {
                            return (
                                <CartePrestationPanier key={prestation.id} prestation={prestation} />
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommandesClients;