import React from "react";
import HeaderSimple from "../components/HeaderSimple";
import Panier from "../components/Panier";
import CommandesClients from "../components/CommandesClients";
import { useState } from "react";

const PanierClient = () => {

  const [afficherPanier, setAfficherPanier] = useState(true);
  const [afficherCommandes, setAfficherCommandes] = useState(false);

  const [panierClassName, setPanierClassName] = useState("affichageSpanSelected");
  const [commandesClassName, setCommandesClassName] = useState("affichageSpan");

  function affichagePanier() {
    setAfficherPanier(!afficherPanier);
    setAfficherCommandes(!afficherCommandes);
    setPanierClassName("affichageSpanSelected");
    setCommandesClassName("affichageSpan");
  }

  function affichageCommandes() {
    setAfficherPanier(!afficherPanier);
    setAfficherCommandes(!afficherCommandes);
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
