import React, { useState } from 'react';
import { useEffect } from 'react';
import Service from '../assets/ApiService';
import CartePrestation from './CartePrestation';
import '../styles/affichagePrestations.css'

const AffichagePrestations = ({ typeDeRecherche, entreprise }) => {
    const [prestations, setPrestations] = useState([])

    const _service = new Service();

    // Récupère toutes les prestations, les prestations filtrées par type ou par nom d'entreprise
    useEffect(() => {

        async function fetchPrestations() {
            const ListePrestations = await _service.recupererPrestations();

            // Si on recherche par type de prestation
            if (entreprise == "") {

                if (typeDeRecherche == "Tous types") {
                    setPrestations(ListePrestations);
                } else { // Lorsqu'on sélectionne un type
                    const prestationsFiltrees = await ListePrestations.filter(prestation => prestation.type === typeDeRecherche);
                    setPrestations(prestationsFiltrees);
                }
            } else { // Si on recherche par nom d'entreprise
                let entrepriseToLower = entreprise.toLowerCase();
                const prestationsParEntreprise = await ListePrestations.filter(prestation => prestation.prestataire.toLowerCase().includes(entrepriseToLower));
                setPrestations(prestationsParEntreprise);
            }
        }
        fetchPrestations();
    }, [typeDeRecherche, entreprise])

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