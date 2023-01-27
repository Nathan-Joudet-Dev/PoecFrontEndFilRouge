import React from 'react';
import HeaderPrestaEtAdmin from '../components/HeaderPrestaEtAdmin';
import { useEffect, useState } from 'react';
import Service from '../assets/ApiService';
import '../styles/accueilAdmin.css';
import CartePrestationsAdmin from '../components/CartePrestationsAdmin';
import NombreDePrestations from '../components/NombreDePrestations';

const AccueilAdmin = () => {

    const [admin, setAdmin] = useState({});
    const [prestations, setPrestations] = useState([]);
    const [prestationsDisponibles, setPrestationsDisponibles] = useState([]);

    const [afficherPrestationsEnCours, setAfficherPrestationsEnCours] = useState(true);
    const [afficherPrestationsParPrestataire, setAfficherPrestationsParPrestataire] = useState(false);

    const [prestataireRecherche, setPrestataireRecherche] = useState('');

    const _service = new Service();

    useEffect(() => {
        const id = localStorage.getItem("id");

        async function fetchDatas(id) {
            // Récupère l'admin actuellement connecté
            const adminTmp = await _service.recupererUtilisateurById(id);
            setAdmin(adminTmp);

            // Récupère les prestations en cours, terminées ou archivées
            const prestationsTmp = await _service.recupererPrestationsAdmin();
            setPrestations(prestationsTmp);

            // Récupère les prestations en état "Disponible"
            const prestationsDisponiblesTmp = await _service.recupererPrestationsDisponibles();
            setPrestationsDisponibles(prestationsDisponiblesTmp);
        }
        fetchDatas(+id);
    }, []);

    /**
     * Affiche les prestations en état autre que "Disponible"
     */
    function afficherEnCours() {
        setAfficherPrestationsEnCours(true);
        setAfficherPrestationsParPrestataire(false);
    }

    /**
     * Affiche les prestations par prestataire
     */
    function afficherParPrestataire() {
        setAfficherPrestationsEnCours(false);
        setAfficherPrestationsParPrestataire(true);
    }

    const rechercherParPrestataire = (value) => {
        setPrestataireRecherche(value);
    }

    return (
        <>
            <HeaderPrestaEtAdmin nom={`${admin.nom} - Administrateur`} arrow='arrowVisible' />
            <div className='navbarAdmin' >
                <button className='btnNavbarAdmin' onClick={afficherEnCours}>Prestations en cours/terminées</button>
                <button className='btnNavbarAdmin' onClick={afficherParPrestataire}>Prestations par prestataires</button>
            </div>
            {afficherPrestationsEnCours && (
                <div className='prestationsMap'>
                    {prestations && (
                        prestations.map((prestation) => {
                            return (
                                <CartePrestationsAdmin key={prestation.id} prestation={prestation} coutTotal={true} />
                            )
                        }))}
                </div>
            )}
            {afficherPrestationsParPrestataire && (
                <>
                    <select className='Select' value={prestataireRecherche} onChange={(e) => rechercherParPrestataire(e.target.value)}>
                        <option value="" label="Selectionner un prestataire"></option>
                        <option value="Design et Marketing" label="Design et Marketing"></option>
                        <option value="Security" label="Security"></option>
                        <option value="Electricité Duval" label="Electricité Duval"></option>
                        <option value="Nature et Création" label="Nature et Création"></option>
                    </select>

                    {prestationsDisponibles && (
                        <NombreDePrestations listePrestations={prestationsDisponibles} />
                    )}

                    <div className='prestationsMap'>
                        {prestationsDisponibles && (
                            prestationsDisponibles.map((prestation) => {
                                if (prestation.prestataire === prestataireRecherche) {
                                    return (
                                        <CartePrestationsAdmin key={prestation.id} prestation={prestation} informationsAdmin={true} />
                                    )
                                }
                            }))}
                    </div>
                </>
            )}
        </>
    );
};

export default AccueilAdmin;
