import React from 'react';
import Service from '../assets/ApiService';
import { useNavigate } from 'react-router-dom';
import '../styles/affichageDevis.css'

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
        <>
            {prestation.devis && (
                <div className='affichageDevis'>
                    <h1>Devis pour la prestation</h1>

                    <p className='titreNomPrestation'>Nom de la prestation</p>
                    <div className='nomPrestation'>{prestation.titre}</div>

                    <p className='titreDetailMateriel'>Détails du matériel</p>
                    <div className='detailMateriel'> {prestation.devis.detailsMateriel} </div>

                    <div className='divTauxEtTotalDevis' >
                        <h3>Taux Horaire (€)</h3>
                        <div className='quatreDivDevis'> {prestation.tauxHoraires} </div>

                        <h3>Coût du matériel (€)</h3>
                        <div className='quatreDivDevis'> {prestation.devis.coutMateriel} </div>

                        <h3>Temps total estimé (h)</h3>
                        <div className='quatreDivDevis'> {prestation.devis.tempsEstime} </div>

                        <h3>Coût total estimé (€)</h3>
                        <div className='quatreDivDevis'> {prestation.devis.coutTotal} </div>
                    </div>

                    <button className='accepterService btnDevis' onClick={accepterDevis}>
                        Accepter devis
                    </button>
                    <button className='refuserService btnDevis' onClick={refuserDevis}>
                        Refuser devis
                    </button>
                </div>
            )}
        </>
    );
};

export default AffichageDevis;