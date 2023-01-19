import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const HeaderPrestaEtAdmin = ({ nom, arrow }) => {

    const _navigate = useNavigate();

    const retour = () => {
        _navigate(-1)
    }

    return (
        <div className='headerConnection'>
            <AiOutlineArrowLeft className={arrow} onClick={retour} />
            <div className='headercontainer'>
                <span className='texte'>{nom}</span>
            </div>
        </div>
    );
};

export default HeaderPrestaEtAdmin;