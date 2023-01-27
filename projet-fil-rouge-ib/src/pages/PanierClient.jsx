import React from "react";
import HeaderSimple from "../components/HeaderSimple";
import Panier from "../components/Panier";
import CommandesClients from "../components/CommandesClients";
import { useState } from "react";
import Footer from "../components/footer";

const PanierClient = () => {

  const [afficherPanier, setAfficherPanier] = useState(true);
  const [afficherCommandes, setAfficherCommandes] = useState(false);

  const [panierClassName, setPanierClassName] = useState("affichageSpanSelected");
  const [commandesClassName, setCommandesClassName] = useState("affichageSpan");

  /**
   * Affiche le panier du client
   */
  function affichagePanier() {
    setAfficherPanier(true);
    setAfficherCommandes(false);
    setPanierClassName("affichageSpanSelected");
    setCommandesClassName("affichageSpan");
  }

  /**
   * Affiche les commandes du client
   */
  function affichageCommandes() {
    setAfficherPanier(false);
    setAfficherCommandes(true);
    setPanierClassName("affichageSpan");
    setCommandesClassName("affichageSpanSelected");
  }

  return (
    <>
      <HeaderSimple />
      <h2 className="mesCommandes">
        <span className={panierClassName} onClick={affichagePanier}>MON PANIER</span> / <span className={commandesClassName} onClick={affichageCommandes}>MES COMMANDES</span>
      </h2>
      {afficherPanier && <Panier />}
      {afficherCommandes && <CommandesClients />}
    </>
  );
};

export default PanierClient;
