import React from 'react';
import { useState } from 'react';
import '../styles/formulaireConnexion.css'

const FormulaireConnexion = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function seConnecterClick() {
        // Vérifier si l'email existe
        // Vérifier si le MdP correspond
        // Rediriger vers la page en fonction du role (client, prestataire, admin)
    }

    return (
        <div className='formulaireConnexion'>
            <p className='bonjour'>Bonjour !</p>
            <p className='connectezVous'>Connectez-vous pour avoir accès à plus de contenu !</p>
            <form className='formConnexion'>
                <label className='labelConnexion' htmlFor="email">Email
                    <span className='labelSpan'>*</span>
                </label>
                <input className='inputConnexion' type="text" onChange={(e) => setEmail(e.target.value)} />
                <label className='labelConnexion' htmlFor="motDePasse">Mot de passe
                    <span className='labelSpan'>*</span>
                </label>
                <input className='inputConnexion' type="password" onChange={(e) => setPassword(e.target.value)} />
                <p className='obligatoires'><span className='etoileObligatoire'>*</span> champs obligatoires</p>
                <button className='boutonSeConnecter' onClick={seConnecterClick}>Se Connecter</button>
            </form>
            <span className='nouveauPrestataire'>Nouveau Prestataire ?</span>
            <span><a className='lienCreerUnCompte' href="#">Créer un compte</a></span>
        </div>
    );
};

export default FormulaireConnexion;