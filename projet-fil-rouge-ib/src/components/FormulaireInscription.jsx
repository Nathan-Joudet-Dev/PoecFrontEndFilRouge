import React from 'react';
import '../styles/formulaireInscription.css'
import HeaderConnection from './HeaderConnection';

const FormulaireInscription = () => {
    return (
        <div className='formulaireInscription'>
            <p className='devenirPresta'>Devenir Prestataire !</p>
            <form className='formInscription'>

                <label className='labelInscription' htmlFor="nom">Nom Société
                    <span className='labelSpan'>*</span>
                </label>
                <input className='inputInscription' type="text" onChange={''} />

                <label className='labelInscription' htmlFor="email">Email
                    <span className='labelSpan'>*</span>
                </label>
                <input className='inputInscription' type="email" onChange={''} />

                <label className='labelInscription' htmlFor="password">Mot de Passe
                    <span className='labelSpan'>*</span>
                </label>
                <input className='inputInscription' type="password" onChange={''} />

                <label className='labelInscription' htmlFor="confirmPassword">Confirmation du Mot de Passe
                    <span className='labelSpan'>*</span>
                </label>
                <input className='inputInscription' type="password" onChange={''} />

                <p className='obligatoires'><span className='etoileObligatoire'>*</span> champs obligatoires</p>
                <button className='boutonSuivant' onClick={''}>Suivant</button>
            </form>
        </div>
    );
};

export default FormulaireInscription;