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
  const [inputRecherche, setInputRecherche] = useState("")

  // Récupère le client actuellement connecté
  useEffect(() => {
    const id = localStorage.getItem('id');

    async function fetchClient(id) {
      const client = await _service.recupererUtilisateurById(id);
      setClient(client);
    }
    fetchClient(+id)
  }, [])

  /**
   * Effectue l'action setInputRecherche(e.target.value) et reset l'input type de prestation
   * @param {string} value La valeur de l'input
   */
  const rechercherParNom = (value) => {
    setInputRecherche(value.toLowerCase());
    setTypeDePrestation("");
  };

  /**
   * Effectue l'action setTypeDePrestation(e.target.value) et reset l'input de recherche par nom
   * @param {string} value La valeur de l'input
   */
  const rechercherParType = (value) => {
    setTypeDePrestation(value);
    setInputRecherche("");
  }

  /**
   * Réinitialise les inputs de recherche
   */
  const reinitialiser = () => {
    setTypeDePrestation("");
    setInputRecherche("");
  }

  return (
    <>
      <div className="navbar">
        <img className="logo" src={logo} alt="Logo UltraMotionCorp" />
        <div className="search">
          <input type="text" className="Entreprise" value={inputRecherche} placeholder="Je recherche une entreprise..." onChange={(e) => rechercherParNom(e.target.value)} />
          <select value={typeDePrestation} onChange={(e) => rechercherParType(e.target.value)}>
            <option value="" label="Tous types"></option>
            <option value="Electricité" label="Electricité"></option>
            <option value="Design et Marketing" label="Design et Marketing"></option>
            <option value="Sécurité" label="Sécurité"></option>
            <option value="Jardinage" label="Jardinage"></option>
          </select>
          <button className="headerBtn" onClick={reinitialiser}>Réinitialiser</button>
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
      {inputRecherche == "" && (
        typeDePrestation === "" ?
          <AffichagePrestations typeDeRecherche="Tous types" entreprise='' />
          :
          <AffichagePrestations typeDeRecherche={typeDePrestation} entreprise='' />
      )}
      {inputRecherche != "" && <AffichagePrestations typeDeRecherche='' entreprise={inputRecherche} />}
    </>
  );
}

export default SearchbarPrestation;
