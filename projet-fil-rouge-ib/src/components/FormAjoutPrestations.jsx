import React from 'react';
import '../styles/ajoutPrestations.css'
import { useState, useEffect } from 'react';
import Service from '../assets/ApiService';
import Prestations from '../models/prestations';

const FormAjoutPrestations = () => {

    const _service = new Service();

    const [prestataire, setPrestataire] = useState({})
    const [titre, setTitre] = useState('')
    const [description, setDescription] = useState('')
    const [tauxHoraire, setTauxHoraire] = useState('')

    useEffect(() => {
        const id = localStorage.getItem('id');

        // Récupère le prestataire actuellement connecté
        async function fetchPrestataire(id) {
            const prestataire = await _service.recupererPrestataireById(id);
            setPrestataire(prestataire);
        }
        fetchPrestataire(+id)
    }, [])

    /**
     * Crée une nouvelle prestation
     */
    const Ajouter = async (e) => {
        e.preventDefault();
        const nouvellePrestation = new Prestations(titre, description, tauxHoraire, prestataire.nomSociete, prestataire.logo, prestataire.typeDePrestation);
        await _service.creerPrestations(nouvellePrestation);
    }

    return (
        <>
            <form className='ajoutPrestations' onSubmit={Ajouter}>
                <h1 className='h1AjoutPrestation'>Ajouter une nouvelle prestation !</h1>

                <label className='labelAjoutPrestation' htmlFor="titre">Titre de la prestation</label>
                <input className='inputAjoutPrestation inputTitre' type="text" name="titre" onChange={e => setTitre(e.target.value)} />

                <label className='labelAjoutPrestation' htmlFor="description">Description de la prestation</label>
                <textarea className='inputAjoutPrestation inputDescription' type="text" name="description" onChange={e => setDescription(e.target.value)} />

                <label className='labelAjoutPrestation' htmlFor="tauxHoraire">Taux horaire de la prestation</label>
                <div className='divTauxHoraire'>
                    <div className='inputTaux'>
                        <input className='inputTauxHoraire' type="text" name='tauxHoraire' onChange={e => setTauxHoraire(e.target.value)} />
                    </div>
                    <div className='TauxHoraire'>€ / h</div>
                </div>

                <input type='submit' className='boutonAjouter' value='Ajouter' />
            </form>
        </>
    );
};

export default FormAjoutPrestations;