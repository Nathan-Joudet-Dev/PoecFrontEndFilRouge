import React from "react";
import { useState, useEffect } from "react";
import "../styles/SearchbarPrestation.css";
import logo from "../data/images/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import Service from "../assets/ApiService";
import AffichagePrestations from '../components/AffichagePrestations';

const SearchbarPrestation = () => {

  const _service = new Service();

  const [client, setClient] = useState({})
  const [typeDePrestation, setTypeDePrestation] = useState("")


  // Récupère le client actuellement connecté
  useEffect(() => {
    const id = localStorage.getItem('id');

    async function fetchClient(id) {
      const client = await _service.recupererUtilisateurById(id);
      setClient(client);
    }
    fetchClient(+id)
  }, [])

  const rechercher = () => {
    // console.log("Value : " + option.label);
  };

  return (
    <>
      <div className="navbar">
        <img className="logo" src={logo} alt="Logo UltraMotionCorp" />
        <div className="search">
          <input type="text" className="Entreprise" placeholder="Je recherche une entreprise..." />
          <select value={typeDePrestation} onChange={(e) => setTypeDePrestation(e.target.value)}>
            <option value="" label="Tous types"></option>
            <option value="Electricité" label="Electricité"></option>
            <option value="Design" label="Design"></option>
            <option value="Sécurité" label="Sécurité"></option>
            <option value="Jardinage" label="Jardinage"></option>
          </select>
          <button className="headerBtn" onClick={rechercher} >Rechercher</button>
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
      {typeDePrestation === "" ?
        <AffichagePrestations typeDeRecherche="" />
        :
        <AffichagePrestations typeDeRecherche={typeDePrestation} />
      }
    </>
  );
}

export default SearchbarPrestation;
