import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/formulaireInscription.css'
import FormulaireInscriptionDeux from './FormulaireInscriptionDeux';

const FormulaireInscription = () => {

    const _navigate = useNavigate();
    const [nomSociete, setNomSociete] = useState('')
    const [email, setEmail] = useState('')
    const [motDePasse, setMotDePasse] = useState('')
    const [confirmationMotDePasse, setConfirmationMotDePasse] = useState('')

    const suivantClick = () => {
        // Pour vérifier que les deux mots de passes correspondent
        if (motDePasse != confirmationMotDePasse) {
            alert("Erreur, les deux mots de passe doivent correspondre")
        } else {
            localStorage.setItem('nomSociete', nomSociete)
            localStorage.setItem('email', email)
            localStorage.setItem('motDePasse', motDePasse)
            _navigate('/inscriptionSuite')
        }
    }

    return (
        <div className='formulaireInscription'>
            <p className='devenirPresta'>Devenir Prestataire !</p>
            <form className='formInscription'>
                <label className='labelInscription' htmlFor="nom">Nom Société
                    <span className='labelSpan'>*</span>
                </label>
                <input className='inputInscription' type="text" onChange={(e) => setNomSociete(e.target.value)} />
                <label className='labelInscription' htmlFor="email">Email
                    <span className='labelSpan'>*</span>
                </label>
                <input className='inputInscription' type="email" onChange={(e) => setEmail(e.target.value)} />
                <label className='labelInscription' htmlFor="password">Mot de Passe
                    <span className='labelSpan'>*</span>
                </label>
                <input className='inputInscription' type="password" onChange={(e) => setMotDePasse(e.target.value)} />
                <label className='labelInscription' htmlFor="confirmPassword">Confirmation du Mot de Passe
                    <span className='labelSpan'>*</span>
                </label>
                <input className='inputInscription' type="password" onChange={(e) => setConfirmationMotDePasse(e.target.value)} />
                <p className='obligatoires'><span className='etoileObligatoire'>*</span> champs obligatoires</p>
                <button className='boutonSuivant' onClick={suivantClick}>Suivant</button>
            </form>
        </div>
    );
};

export default FormulaireInscription;