import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AccueilClient from '../pages/AccueilClient';
import HomePage from '../pages/HomePage';
import Inscription from '../pages/Inscription';
import InscriptionSuite from '../pages/InscriptionSuite';
import AjoutPrestations from '../pages/AjoutPrestations';
// nathan









// corentin










// benjamin










//
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/inscription' element={<Inscription />} />
                <Route path='/inscriptionSuite' element={<InscriptionSuite />} />
                <Route path='/ajoutPrestation' element={<AjoutPrestations />} />
                <Route path='/client' element={<AccueilClient />} />
                <Route path='/nathan' element='#' />
                <Route path='/corentin' element='#' />
                <Route path='/benjamin' element='#' />

                <Route path='/*' element='erreur 404' />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;