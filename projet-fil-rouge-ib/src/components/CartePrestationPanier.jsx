import { useEffect, useState } from "react";
import "../styles/cartePrestationPanier.css";
import Service from "../assets/ApiService";
import { useNavigate } from "react-router-dom";

const CartePrestationPanier = ({ prestation }) => {
  const _service = new Service();
  const _navigate = useNavigate();

  const [client, setClient] = useState({});
  const [prestationTerminee, setPrestationTerminee] = useState();
  const [prestationTermineeDesDeuxCotes, setPrestationTermineeDesDeuxCotes] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("id");

    // Récupère le client actuellement connecté
    async function fetchClient(id) {
      const clientTmp = await _service.recupererUtilisateurById(id);
      setClient(clientTmp);
      prestation.validationClient == true ? setPrestationTerminee(true) : setPrestationTerminee(false);
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

  /**
   * Valide la prestation côté client, puis vérifie si le prestataire a également validé la prestation
   */
  const ValiderFinPrestation = async () => {
    prestation.validationClient = true;
    await _service.modifierPrestations(prestation.id, prestation);
    terminerPrestation();
    verifierEtatPrestation();
  };

  /**
   * Affiche le devis
   */
  const consulterDevis = async () => {
    localStorage.setItem("idPrestation", prestation.id)
    _navigate('/affichageDevis')
  };

  /**
   * Change le state pour actualiser la page
   */
  const terminerPrestation = () => {
    setPrestationTerminee(true);
  }

  /**
   * Vérifie si la fin de la prestation a été validée des 2 côtés
   */
  const verifierEtatPrestation = async () => {
    const prestationAverifier = await _service.recupererPrestationById(prestation.id);
    if (prestationAverifier.validationClient == true && prestationAverifier.validationPrestataire == true) {
      prestationAverifier.etat = "Terminée";
      await _service.modifierPrestations(prestationAverifier.id, prestationAverifier);
      setPrestationTermineeDesDeuxCotes(true);
      window.location.reload();
    }
  }

  /**
   * Affiche le composant pour noter la prestation
   */
  const noterPresta = async () => {
    localStorage.setItem("idPrestation", prestation.id)
    _navigate('/noterPrestation')
  }

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
          <p className="Notation" hidden={prestation.etat !== "Prestation Terminée"}>
            Evaluer cette Prestation{" "}
          </p>
        </div>

        {!prestation.devis.coutTotal && <p className="prixPrestation">{prestation.tauxHoraires} €</p>}
        {prestation.devis.coutTotal && <p className="prixPrestation">{prestation.devis.coutTotal} €</p>}

        <div className="descriptionPrestation">{prestation.description}</div>
        {!prestationTerminee && (
          <button className="terminer" onClick={ValiderFinPrestation} hidden={prestation.etat != "En cours"}>Terminer cette Prestation</button>
        )}
        {prestationTerminee && (
          <button className="terminer">Prestation Terminée</button>
        )}
        <div className='boutonsAccepterRefuser'>
          <button className='accepterService' onClick={consulterDevis} hidden={prestation.etat != "En attente d'acceptation du devis"} >
            Consulter le devis
          </button>
          {prestation.validationClient == true && (
            prestation.validationPrestataire == true && (
              prestation.noteMoyenne == 0 && (
                <button className="BoutonNoterPrestation" onClick={noterPresta}>
                  Noter cette prestation
                </button>
              )))}
        </div>
      </div>
    </div>
  );
};

export default CartePrestationPanier;
