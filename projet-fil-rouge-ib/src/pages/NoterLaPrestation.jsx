import React from 'react';
import HeaderSimple from '../components/HeaderSimple';
import NoterPrestation from '../components/NoterPrestation'
import Service from '../assets/ApiService';
import { useEffect, useState } from 'react';
import Footer from '../components/footer';

const NoterLaPrestation = () => {

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
            <HeaderSimple />
            <NoterPrestation prestation={prestation} />
        </>
    );
};

export default NoterLaPrestation;
