import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate, Link } from 'react-router-dom';
import logo from "../data/images/logo.png";
import '../styles/headerPrestaEtAdmin.css'

const HeaderPrestaEtAdmin = ({ nom, arrow, boutonAjouter }) => {

    const _navigate = useNavigate();

    const retour = () => {
        _navigate(-1)
    }

    return (
        <div className='headerConnection'>
            <AiOutlineArrowLeft className={arrow} onClick={retour} />
            <img className="logo logoHeader" src={logo} alt="Logo UltraMotionCorp" />
            <div className='headercontainer'>
                <span className='texte'>{nom}</span>
            </div>
            {boutonAjouter && <Link to='/ajoutPrestation' className='boutonAjouterPresta'>Ajouter une prestation</Link>}
        </div>
    );
};

export default HeaderPrestaEtAdmin;