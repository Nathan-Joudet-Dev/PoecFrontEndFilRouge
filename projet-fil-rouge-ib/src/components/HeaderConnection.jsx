import React from 'react';
import '../styles/headerConnection.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { IoShieldCheckmarkSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';

const HeaderConnection = ({ texte, arrow }) => {

    const _navigate = useNavigate();

    const arrowclick = () => {
        _navigate(-1)
    }

    return (
        <div className='headerConnection'>
            <AiOutlineArrowLeft className={arrow} onClick={arrowclick} />
            <span className='ultraMotion'>UltraMotionCorp</span>
            <span className='separation'></span>
            <IoShieldCheckmarkSharp className='shield' />
            <span className='texte'>{texte}</span>
        </div>
    );
};

export default HeaderConnection;