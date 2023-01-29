import React from 'react';
import FormulaireInscriptionDeux from '../components/FormulaireInscriptionDeux';
import HeaderConnection from '../components/HeaderConnection';

const InscriptionSuite = () => {
    return (
        <div className='inscriptionSuite'>
            <HeaderConnection texte='Inscription' arrow='arrowVisible' />
            <FormulaireInscriptionDeux />
        </div>
    );
};

export default InscriptionSuite;