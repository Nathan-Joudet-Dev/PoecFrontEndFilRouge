import React, { useState } from 'react';
import { useEffect } from 'react';
import Service from '../assets/ApiService';
import CartePrestation from './CartePrestation';
import '../styles/affichagePrestations.css'

const AffichagePrestations = ({ typeDeRecherche }) => {
    const [prestations, setPrestations] = useState([])

    const _service = new Service();

    // Récupère toutes les prestations ou les prestations filtrées par type
    useEffect(() => {
        async function fetchPrestations() {
            const prestations = await _service.recupererPrestations();
            if (typeDeRecherche != "") {
                const prestationsFiltrees = await prestations.filter(prestation => prestation.type === typeDeRecherche)
                setPrestations(prestationsFiltrees);
            } else {
                setPrestations(prestations);
            }
        }
        fetchPrestations();
    }, [typeDeRecherche])

    return (
        <div className='affichagePrestations'>
            {prestations && (
                prestations.map((prestation) => {
                    return (
                        <CartePrestation key={prestation.id} prestation={prestation} />
                    )
                })
            )}
        </div>
    );
};

export default AffichagePrestations;