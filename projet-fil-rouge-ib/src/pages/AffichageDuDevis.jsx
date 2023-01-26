import React from 'react';
import HeaderPrestaEtAdmin from '../components/HeaderPrestaEtAdmin';
import AffichageDevis from '../components/AffichageDevis';
import Service from '../assets/ApiService';
import { useEffect, useState } from 'react';

const AffichageDuDevis = () => {

    const [prestataire, setPrestataire] = useState({});
    const [prestation, setPrestation] = useState([]);

    const _service = new Service();

    useEffect(() => {
        const id = localStorage.getItem("id");
        const idPrestation = localStorage.getItem("idPrestation");

        // Récupère le prestataire actuellement connecté et le devis correspondant à la prestation
        async function fetchDatas(id, idPrestation) {
            const prestataireTmp = await _service.recupererPrestataireById(id);
            setPrestataire(prestataireTmp);

            const devisTmp = await _service.recupererPrestationById(idPrestation);
            setPrestation(devisTmp);
        }
        fetchDatas(+id, +idPrestation);
    }, []);

    return (
        <>
            <HeaderPrestaEtAdmin nom={prestataire.nomSociete} arrow='arrowVisible' boutonAjouter={true} />
            <AffichageDevis prestation={prestation} />
        </>
    );
};

export default AffichageDuDevis;
