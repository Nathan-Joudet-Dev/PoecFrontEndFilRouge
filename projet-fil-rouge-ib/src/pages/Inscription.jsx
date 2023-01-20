import React from 'react';
import FormulaireInscription from '../components/FormulaireInscription';
import HeaderConnection from '../components/HeaderConnection';

const Inscription = () => {
    return (
        <div className='inscription'>
            <HeaderConnection texte='Inscription' arrow='arrowVisible' />
            <FormulaireInscription />
        </div>
    );
};

export default Inscription;