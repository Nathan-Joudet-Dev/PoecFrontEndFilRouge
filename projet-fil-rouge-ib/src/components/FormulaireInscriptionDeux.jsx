import React from 'react';
import '../styles/formulaireInscriptionDeux.css'

const FormulaireInscriptionDeux = () => {
    return (
        <div className='formulaireInscriptionDeux'>
            <p className='devenirPresta'>Devenir Prestataire !</p>

            <form className='formInscriptionDeux'>
                <label className='labelInscription' htmlFor="Logo">Logo</label>
                <input className='inputInscription inputLogo' type="file" />

                <label className='labelInscription' htmlFor="Description">Description de l'entreprise</label>
                <textarea className='inputInscription inputDescription' type="text" />

                <div className='labelFlex'>
                    <label className='labelInscription' htmlFor="Téléphone">Téléphone</label>
                    <input className='inputInscription inputFlex' type="phone" />

                    <label className='labelInscription' htmlFor="Adresse">Adresse</label>
                    <input className='inputInscription inputFlex' type="text" />

                    <label className='labelInscription' htmlFor="Pays">Pays</label>
                    <input className='inputInscription inputFlex' type="text" />

                    <label className='labelInscription' htmlFor="SIRET">SIRET</label>
                    <input className='inputInscription inputFlex' type="text" />

                    <label className='labelInscription' htmlFor="Ville">Ville</label>
                    <input className='inputInscription inputFlex' type="text" />

                    <label className='labelInscription' htmlFor="Effectif">Effectif</label>
                    <input className='inputInscription inputFlex' type="text" />
                </div>

                <label className='labelInscription' htmlFor="DomainePrincipal">Domaine Principal d'activité</label>
                <input className='inputInscription inputBottom' type="text" />

                <label className='labelInscription' htmlFor="ZoneGeographique">Zone géographique couverte</label>
                <input className='inputInscription inputBottom' type="text" />
            </form>
            <button className='boutonTerminer' onClick={''}>Terminer l'inscription</button>
        </div>
    );
};

export default FormulaireInscriptionDeux;