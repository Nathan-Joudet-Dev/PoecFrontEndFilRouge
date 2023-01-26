import React from 'react';
import Service from '../assets/ApiService';
import { useNavigate } from 'react-router-dom';

const AffichageDevis = ({ prestation }) => {

    const _service = new Service();
    const _navigate = useNavigate();

    /**
     * Accepte le devis et passe l'état de la prestation à "En cours"
     */
    const accepterDevis = async () => {
        prestation.etat = "En cours";

        await _service.modifierPrestations(prestation.id, prestation);
        _navigate(-1);
    };

    /**
     * Refuse le devis et passe l'état de la prestation à "Devis Refusé"
    */
    const refuserDevis = async () => {
        prestation.etat = "Devis Refusé";

        await _service.modifierPrestations(prestation.id, prestation);
        _navigate(-1);
    };

    return (
        <div>
            <button className='accepterService' onClick={accepterDevis}>
                Accepter devis
            </button>
            <button className='refuserService' onClick={refuserDevis}>
                Refuser devis
            </button>
        </div>
    );
};

export default AffichageDevis;