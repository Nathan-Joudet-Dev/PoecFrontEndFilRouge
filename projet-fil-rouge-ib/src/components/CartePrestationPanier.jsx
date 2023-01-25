import { useEffect, useState } from "react";
import "../styles/cartePrestationPanier.css";
import Service from "../assets/ApiService";

const CartePrestationPanier = ({ prestation }) => {
  const _service = new Service();

  const [client, setClient] = useState({});

  useEffect(() => {
    const id = localStorage.getItem("id");

    // Récupère le client actuellement connecté
    async function fetchClient(id) {
      const clientTmp = await _service.recupererUtilisateurById(id);
      setClient(clientTmp);
    }
    fetchClient(+id);
  }, []);

  const getCouleur = (etat) => {
    switch (etat) {
      case "Disponible":
      case "En attente de validation du panier":
        return "#d5d8e4";
      case "En attente de validation du devis":
        return "#FFA500";
      case "En attente d'acceptation du devis":
        return "#5EE95B";
      case "Prestation Refusée":
      case "Devis Refusé":
        return "#FF0000";
      case "En Cours":
        return "#E0FFFF";
      case "Prestation Terminée":
        return "#ffd814";
      case "Archivée":
        return "#333333";
      default:
        return "#FFFFFF";
    }
  };

  const Valider = () => {
    prestation.validationClient = true;
  };

  return (
    <div className="cartePrestationPanier">
      <div className="imagePrestation">
        <img src={prestation.image} alt="Prestation" />
      </div>
      <div className="infosPrestation">
        <div className="FirstRow">
          <p className="titrePrestation">{prestation.titre} </p>
          <p
            className="EtatPrestation"
            hidden={
              prestation.etat === "Disponible" ||
              prestation.etat === "En attente de validation du panier"
            }
            style={{ backgroundColor: getCouleur(prestation.etat) }}
          >
            {prestation.etat}
          </p>
          <p
            className="Notation"
            hidden={prestation.etat !== "Prestation Terminée"}
          >
            Evaluer cette Prestation{" "}
          </p>
        </div>
        <p className="prixPrestation">{prestation.tauxHoraires} €</p>
        <div className="descriptionPrestation">{prestation.description}</div>
        <button
          className="terminer"
          hidden={
            prestation.etat !== "En Cours" &&
            prestation.validationClient === true
          }
          onClick={Valider()}
        >
          Terminer cette Prestation
        </button>
      </div>
    </div>
  );
};

export default CartePrestationPanier;
