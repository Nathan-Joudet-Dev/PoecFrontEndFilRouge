import React, { useState } from 'react';
import { useEffect } from 'react';
import Service from '../assets/ApiService';
import CartePrestation from './CartePrestation';


const AffichagePrestations = () => {
    const [ prestations, setPrestations] = useState([])

    const _service = new Service();

    useEffect(() => {
        async function fetchPrestations () {
            const prestations = await _service.recupererPrestations();
            setPrestations(prestations);
        }
        fetchPrestations();
    }, [])


    return (
        <div>
            {prestations && (
                prestations.map((prestation) => {
                    return (
                        <CartePrestation key={prestation.id} 
                        imageUrl={prestation.imageUrl} 
                        titre={prestation.titre} 
                        prix={prestation.prix} 
                        description={prestation.description}/>
                    )

                })
            )}
            
        </div>
    );
};

export default AffichagePrestations;