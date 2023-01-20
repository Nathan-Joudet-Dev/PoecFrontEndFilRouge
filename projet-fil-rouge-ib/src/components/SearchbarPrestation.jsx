import React from "react";
import "../styles/SearchbarPrestation.css";
import logo from "../data/images/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import Select from "react-select";

function SearchbarPrestation() {
  const customStyles = {
    control: (base) => ({
      ...base,
      background: "#d9d9d9",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "black",
    }),
  };

  const option = [
    { value: "Eletricité", label: "Electricité" },
    { value: "Design", label: "Design" },
    { value: "Securite", label: "Sécurité" },
    { value: "Jardinage", label: "Jardinage" },
  ];

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="Logo UltraMotionCorp" />

      <div className="search">
        <input
          type="text"
          className="Entreprise"
          placeholder="Je recherche une entreprise..."
        ></input>
        <Select
          className="Menu_Deroulant"
          styles={customStyles}
          options={option}
          placeholder="Type de Prestations..."
        />
        <button className="headerBtn">Rechercher</button>
      </div>

      <div className="Icons">
     
          <div className="circle">
            <FaUserCircle className="userCircle" />
            <p>"Nom Prestataire"</p>
          </div>
        

        <div className="basket">
          <SlBasket className="Basket" />
        </div>
        </div>
        
      {/* <div className="circle">
          <FaUserCircle className="userCircle" />
        </div>
        <div className="basket">
          <SlBasket className="Basket" />
        </div> */}
    </div>
  );
}

export default SearchbarPrestation;

// Select
// Tabeau presta
// MAP OPTION DU select
