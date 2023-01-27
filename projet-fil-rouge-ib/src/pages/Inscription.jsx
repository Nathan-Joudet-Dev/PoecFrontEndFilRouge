import React from 'react';
import Footer from '../components/footer';
import FormulaireInscription from '../components/FormulaireInscription';
import HeaderConnection from '../components/HeaderConnection';

const Inscription = () => {
    return (
        <div className='inscription'>
            <HeaderConnection texte='Inscription' arrow='arrowVisible' />
            <FormulaireInscription />
            <Footer />
        </div>
    );
};

export default Inscription;