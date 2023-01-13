import React from 'react';
import { useEffect, useState } from 'react';
import Service from '../assets/ApiService'
import '../styles/formulaireInscriptionDeux.css'

const FormulaireInscriptionDeux = () => {

    const _service = new Service()

    const [nomSociete, setNomSociete] = useState('')
    const [email, setEmail] = useState('')
    const [motDePasse, setMotDePasse] = useState('')

    const [logo, setLogo] = useState('')
    const [description, setDescription] = useState('')
    const [telephone, setTelephone] = useState('')
    const [adresse, setAdresse] = useState('')
    const [pays, setPays] = useState('')
    const [siret, setSiret] = useState('')
    const [ville, setVille] = useState('')
    const [effectif, setEffectif] = useState('')
    const [domaine, setDomaine] = useState('')
    const [zoneGeo, setZoneGeo] = useState('')

    useEffect(() => {
        setNomSociete(localStorage.getItem('nomSociete'))
        setEmail(localStorage.getItem('email'))
        setMotDePasse(localStorage.getItem('motDePasse'))
    }, [])

    async function terminerClick() {
        const nouvelUtilisateur = {
            nomSociete: nomSociete,
            email: email,
            motDePasse: motDePasse,
            logo: logo,
            description: description,
            telephone: telephone,
            adresse: adresse,
            pays: pays,
            siret: siret,
            ville: ville,
            effectif: effectif,
            domaine: domaine,
            zoneGeo: zoneGeo
        }
        _service.creerUtilisateur(nouvelUtilisateur);
    }

    return (
        <div className='formulaireInscriptionDeux'>
            <p className='devenirPresta'>Devenir Prestataire !</p>
            <form className='formInscriptionDeux'>
                <label className='labelInscription' htmlFor="Logo">Logo</label>
                <input className='inputInscription inputLogo' type="file" onChange={(e) => setLogo(e.target.value)} />
                <label className='labelInscription' htmlFor="Description">Description de l'entreprise</label>
                <textarea className='inputInscription inputDescription' type="text" onChange={(e) => setDescription(e.target.value)} />
                <div className='labelFlex'>
                    <label className='labelInscription' htmlFor="Téléphone">Téléphone</label>
                    <input className='inputInscription inputFlex' type="phone" onChange={(e) => setTelephone(e.target.value)} />
                    <label className='labelInscription' htmlFor="Adresse">Adresse</label>
                    <input className='inputInscription inputFlex' type="text" onChange={(e) => setAdresse(e.target.value)} />
                    <label className='labelInscription' htmlFor="Pays">Pays</label>
                    <input className='inputInscription inputFlex' type="text" onChange={(e) => setPays(e.target.value)} />
                    <label className='labelInscription' htmlFor="SIRET">SIRET</label>
                    <input className='inputInscription inputFlex' type="text" onChange={(e) => setSiret(e.target.value)} />
                    <label className='labelInscription' htmlFor="Ville">Ville</label>
                    <input className='inputInscription inputFlex' type="text" onChange={(e) => setVille(e.target.value)} />
                    <label className='labelInscription' htmlFor="Effectif">Effectif</label>
                    <input className='inputInscription inputFlex' type="text" onChange={(e) => setEffectif(e.target.value)} />
                </div>
                <label className='labelInscription' htmlFor="DomainePrincipal">Domaine Principal d'activité</label>
                <input className='inputInscription inputBottom' type="text" onChange={(e) => setDomaine(e.target.value)} />
                <label className='labelInscription' htmlFor="ZoneGeographique">Zone géographique couverte</label>
                <input className='inputInscription inputBottom' type="text" onChange={(e) => setZoneGeo(e.target.value)} />
            </form>
            <button className='boutonTerminer' onClick={terminerClick}>Terminer l'inscription</button>
        </div>
    );
};

export default FormulaireInscriptionDeux;