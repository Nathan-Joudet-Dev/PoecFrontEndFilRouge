import React from 'react';
import HeaderSimple from '../components/HeaderSimple';
import AffichageDevis from '../components/AffichageDevis';
import Service from '../assets/ApiService';
import { useEffect, useState } from 'react';
import Footer from '../components/footer';

const AffichageDuDevis = () => {

    const [client, setClient] = useState({});
    const [prestation, setPrestation] = useState({});

    const _service = new Service();

    useEffect(() => {
        const id = localStorage.getItem("id");
        const idPrestation = localStorage.getItem("idPrestation");

        // Récupère le prestataire actuellement connecté et le devis correspondant à la prestation
        async function fetchDatas(id, idPrestation) {
            const clientTmp = await _service.recupererUtilisateurById(id);
            setClient(clientTmp);

            const devisTmp = await _service.recupererPrestationById(idPrestation);
            setPrestation(devisTmp);
        }
        fetchDatas(+id, +idPrestation);
    }, []);

    return (
        <>
            <HeaderSimple />
            <AffichageDevis prestation={prestation} />
        </>
    );
};

export default AffichageDuDevis;
