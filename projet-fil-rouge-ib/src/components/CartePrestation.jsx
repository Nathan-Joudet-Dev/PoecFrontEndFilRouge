import React from 'react';
import '../styles/cartePrestation.css'

const CartePrestation = ({ imageUrl, titre, prix, description }) => {
    return (
        <div className='cartePrestation'>
            <div className='imagePresta' >
                <img src={imageUrl} alt="Prestation" />
            </div>
            <div className='infosPresta'>
                <p className='titrePresta'>{titre}</p>
                <p className='prixPresta'>{prix} €</p>
                <div className='descriptionPresta'>{description}</div>
            </div>
            <div className='detailsEtPanier'>
                <button className='btnDetails'>Détails</button>
                <button className='btnAjouter'>Ajouter au panier</button>
            </div>
        </div>
    );
};

export default CartePrestation;