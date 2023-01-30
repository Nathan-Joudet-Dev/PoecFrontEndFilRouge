import React from 'react';
import { useState } from 'react';
import Service from '../assets/ApiService';
import Devis from '../models/devis';
import '../styles/creationDevis.css';
import { useNavigate } from 'react-router-dom';

const CreationDevis = ({ prestation }) => {

    const _service = new Service();
    const _navigate = useNavigate();

    const [detailMateriel, setDetailMateriel] = useState('')
    const [coutMateriel, setCoutMateriel] = useState(0)
    const [tempsEstime, setTempsEstime] = useState(0)

    /**
     * Crée un nouveau Devis, l'ajoute à la prestation et modifie l'état de la prestation
     */
    const creerDevis = async (e) => {
        e.preventDefault();

        const nouveauDevis = new Devis(detailMateriel, coutMateriel, tempsEstime, calculerCoutTotal())

        prestation.devis = nouveauDevis;
        prestation.coutTotal = calculerCoutTotal();
        prestation.etat = "En attente d'acceptation du devis";
        console.log(prestation.coutTotal);

        await _service.modifierPrestations(prestation.id, prestation);

        _navigate(-1);
    }

    /**
     * Calcule le cout total du devis en fonction du cout du matériel et du temps estimé mutliplié par le taux horaire
     * @returns le cout total du devis
     */
    const calculerCoutTotal = () => {
        const total = coutMateriel + tempsEstime * prestation.tauxHoraires;
        return parseInt(total);
    }

    return (
        <>
            <form className='ajoutPrestations creationDevis' onSubmit={creerDevis}>
                <h1 className='h1AjoutPrestation'>Création du devis !</h1>

                <label className='labelAjoutPrestation' htmlFor="detailMateriel">Détails du matériel</label>
                <textarea className='inputAjoutPrestation inputDescription' type="text" name="detailMateriel" onChange={e => setDetailMateriel(e.target.value)} />

                <label className='labelAjoutPrestation' htmlFor="coutMateriel">Coût du matériel</label>
                <input className='inputAjoutPrestation inputTitre' type="number" name="coutMateriel" onChange={e => setCoutMateriel(parseFloat(e.target.value))} />

                <label className='labelAjoutPrestation' htmlFor="tempsEstime">Temps total estimé</label>
                <div className='divTauxHoraire'>
                    <div className='inputTaux'>
                        <input className='inputTauxHoraire' type="number" name='tempsEstime' onChange={e => setTempsEstime(parseFloat(e.target.value))} />
                    </div>
                    <div className='TauxHoraire'>/ h</div>
                </div>

                <input type='submit' className='boutonAjouter' value='Créer et envoyer' />
            </form>
        </>
    );
};

export default CreationDevis;
