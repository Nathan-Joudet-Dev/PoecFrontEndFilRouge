import React from 'react';
import { useState, useEffect } from 'react';

const NombreDePrestations = ({ listePrestations }) => {

    const [nombreDePrestationsMinimum, setNombreDePrestationsMinimum] = useState(0);
    const [nombreDePrestationsMoyen, setNombreDePrestationsMoyen] = useState(0);
    const [nombreDePrestationsMaximum, setNombreDePrestationsMaximum] = useState(0);

    useEffect(() => {
        async function fetchDatas2() {

            // Récupère la liste des prestataires dans un tableau
            let listeDesPrestataires = [];
            for (const prestation of listePrestations) {
                if (!listeDesPrestataires.includes(prestation.prestataire)) {
                    listeDesPrestataires.push(prestation.prestataire);
                }
            }

            // Récupère le nombre de prestations pour chaque prestataire dans un tableau
            let tableauDeNombres = [];
            for (const prestataire of listeDesPrestataires) {

                let nombreDePrestations = 0;
                for (const prestation of listePrestations) {
                    if (prestation.prestataire === prestataire) {
                        nombreDePrestations++;
                    }
                }
                tableauDeNombres.push(nombreDePrestations);

                // Récupère le nombre de prestations minimum, maximum et moyen
                let nombreDePrestationsMinimum = tableauDeNombres.reduce((a, b) => Math.min(a, b));
                let nombreDePrestationsMaximum = tableauDeNombres.reduce((a, b) => Math.max(a, b));
                let nombreMoyenDePrestations = (nombreDePrestationsMinimum + nombreDePrestationsMaximum) / 2;

                setNombreDePrestationsMinimum(nombreDePrestationsMinimum);
                setNombreDePrestationsMaximum(nombreDePrestationsMaximum);
                setNombreDePrestationsMoyen(nombreMoyenDePrestations);
            }
        }
        fetchDatas2();
    }, []);

    return (
        <div className='nombreDePrestations'>
            <div className='containerNombrePrestations'>
                <div className='divNombrePrestations'>
                    {nombreDePrestationsMinimum}
                </div>
                <div>Prestations <div><b>minimum</b></div> </div>
            </div>

            <div className='containerNombrePrestations'>
                <div className='divNombrePrestations'>
                    {nombreDePrestationsMoyen}
                </div>
                <div>Prestations <div><b>en moyenne</b></div> </div>
            </div>

            <div className='containerNombrePrestations'>
                <div className='divNombrePrestations'>
                    {nombreDePrestationsMaximum}
                </div>
                <div>Prestations <div><b>maximum</b></div> </div>
            </div>
        </div>
    );
};

export default NombreDePrestations;