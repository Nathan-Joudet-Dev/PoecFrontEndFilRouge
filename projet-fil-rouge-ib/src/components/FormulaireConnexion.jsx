import React from 'react';
import '../styles/formulaireConnexion.css'

const FormulaireConnexion = () => {
    return (
        <div className='formulaireConnexion'>
            <p className='bonjour'>Bonjour !</p>
            <p className='connectezVous'>Connectez-vous pour avoir accès à plus de contenu !</p>
            <form className='formConnexion' action="submit">
                <label className='labelConnexion' htmlFor="email">Email
                    <span className='labelSpan'>champ requis</span>
                </label>
                <input className='inputConnexion' type="text" />
                <label className='labelConnexion' htmlFor="motDePasse">Mot de passe
                    <span className='labelSpan labelSpanDeux'>champ requis</span>
                </label>
                <input className='inputConnexion' type="password" />
                <button className='boutonSeConnecter'>Se Connecter</button>
            </form>
            <span className='nouveauPrestataire'>Nouveau Prestataire ?</span>
            <span><a className='lienCreerUnCompte' href="#">Créer un compte</a></span>
        </div>
    );
};

export default FormulaireConnexion;