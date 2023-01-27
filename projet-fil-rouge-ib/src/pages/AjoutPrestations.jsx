import React from 'react';
import { useState, useEffect } from 'react';
import Service from '../assets/ApiService';
import HeaderPrestaEtAdmin from '../components/HeaderPrestaEtAdmin';
import FormAjoutPrestations from '../components/FormAjoutPrestations';
import Footer from '../components/footer';

const AjoutPrestations = () => {

    const _service = new Service();

    const [prestataire, setPrestataire] = useState({})

    useEffect(() => {
        const id = localStorage.getItem('id');

        // Récupère le prestataire actuellement connecté
        async function fetchPrestataire(id) {
            const prestataire = await _service.recupererPrestataireById(id);
            setPrestataire(prestataire);
        }
        fetchPrestataire(+id)
    }, [])

    return (
        <>
            <HeaderPrestaEtAdmin nom={prestataire.nomSociete} arrow='arrowVisible' boutonAjouter={false} />
            <FormAjoutPrestations />
        </>
    );
};

export default AjoutPrestations;