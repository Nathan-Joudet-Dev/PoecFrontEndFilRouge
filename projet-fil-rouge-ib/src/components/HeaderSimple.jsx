import React from "react";
import { useState, useEffect } from "react";
import logo from "../data/images/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import Service from "../assets/ApiService";
import '../styles/headerSimple.css'

const HeaderSimple = () => {

  const _service = new Service();

  const [client, setClient] = useState({})

  // Récupère le client actuellement connecté
  useEffect(() => {
    const id = localStorage.getItem('id');

    async function fetchClient(id) {
      const client = await _service.recupererUtilisateurById(id);
      setClient(client);
    }
    fetchClient(+id)
  }, [])


  return (
    <>
      <div className="navbarSimple">
        <img className="logo" src={logo} alt="Logo UltraMotionCorp" />
        <div className="search">
        </div>
        <div className="Icons">
          <div className="circle">
            <FaUserCircle className="userCircle" />
            <p>{client.nom} </p>
          </div>
          <div className="basket">
            <SlBasket className="Basket" />
          </div>
        </div>
      </div>
     
    </>
  );
}

export default HeaderSimple;
