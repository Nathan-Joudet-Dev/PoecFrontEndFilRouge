import React from 'react';
import HeaderPrestaEtAdmin from './HeaderPrestaEtAdmin';
import '../styles/ajoutPrestations.css'

const AjoutPrestations = () => {

    // Récupérer le prestataire via le localstorage

    return (
        <>
            <HeaderPrestaEtAdmin nom="nom prestataire" arrow='arrowVisible' />
            <div className='ajoutPrestations'>
                <h1 className='h1AjoutPrestation'>Ajouter une nouvelle prestation !</h1>

                <label className='labelAjoutPrestation' htmlFor="titre">Titre de la prestation</label>
                <input className='inputAjoutPrestation inputTitre' type="text" name="titre" />

                <label className='labelAjoutPrestation' htmlFor="description">Description de la prestation</label>
                <textarea className='inputAjoutPrestation inputDescription' type="text" name="description" />

                <label className='labelAjoutPrestation' htmlFor="tauxHoraire">Taux horaire de la prestation</label>
                <div className='divTauxHoraire'>
                    <input className='inputAjoutPrestation inputTauxHoraire' type="text" name='tauxHoraire' />
                    <div className='TauxHoraire'>€ / h</div>
                </div>

                <button className='boutonAjouter'>Ajouter</button>
            </div>
        </>
    );
};

export default AjoutPrestations;