import React from 'react';
import HeaderPrestaEtAdmin from '../components/HeaderPrestaEtAdmin';
import CreationDevis from '../components/CreationDevis';
import Service from '../assets/ApiService';
import { useEffect, useState } from 'react';
import Footer from '../components/footer';

const CreationDuDevis = () => {

    const [prestataire, setPrestataire] = useState({});
    const [prestation, setPrestation] = useState([]);

    const _service = new Service();

    useEffect(() => {
        const id = localStorage.getItem("id");
        const idPrestation = localStorage.getItem("idPrestation");

        // Récupère le prestataire actuellement connecté et la prestation correspondant au devis à créer
        async function fetchDatas(id, idPrestation) {
            const prestataireTmp = await _service.recupererPrestataireById(id);
            setPrestataire(prestataireTmp);

            const prestationTmp = await _service.recupererPrestationById(idPrestation);
            setPrestation(prestationTmp);
        }
        fetchDatas(+id, +idPrestation);
    }, []);

    return (
        <>
            <HeaderPrestaEtAdmin nom={prestataire.nomSociete} arrow='arrowVisible' boutonAjouter={true} />
            <CreationDevis prestation={prestation} />
            <Footer />
        </>
    );
};

export default CreationDuDevis;
