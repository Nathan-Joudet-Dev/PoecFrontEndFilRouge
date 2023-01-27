import React from 'react';
import '../styles/homePage.css'
import HeaderConnection from '../components/HeaderConnection';
import FormulaireConnexion from '../components/FormulaireConnexion'
import Footer from '../components/footer';

const HomePage = () => {
    return (
        <div className='homePage'>
            <HeaderConnection texte='Connection' arrow='arrowNonVisible' />
            <FormulaireConnexion />
        </div>
    );
};

export default HomePage;