import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchbarPrestation from './SearchbarPrestation';

// nathan










// corentin










// benjamin










//
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element='homepage' />

                <Route path='/nathan' element={<SearchbarPrestation></SearchbarPrestation>} />
                <Route path='/corentin' element='#' />
                <Route path='/benjamin' element='#' />

                <Route path='/*' element='erreur 404' />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;