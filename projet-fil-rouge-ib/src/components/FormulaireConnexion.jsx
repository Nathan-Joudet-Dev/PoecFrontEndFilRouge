import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Service from '../assets/ApiService';
import '../styles/formulaireConnexion.css'

const FormulaireConnexion = () => {

    const [email, setEmail] = useState('')
    const [motDePasse, setMotDePasse] = useState('')

    const _navigate = useNavigate();
    const _service = new Service();

    /**
     * Vérifie si l'email existe pour un utilisateur ou un prestataire, puis vérifie si le mot de passe correspond.
     * Redirige vers la page d'accueil utilisateur ou admin, ou affiche une alerte en cas d'erreur.
     */
    async function seConnecter() {

        // Vérifie si l'email existe pour un utilisateur
        const utilisateurs = await _service.recupererUtilisateurs();
        const utilisateur = await utilisateurs.find(utilisateur => utilisateur.email === email);

        // Si l'email n'existe pas pour un utilisateur, vérifie si l'email existe pour un prestataire
        if (!utilisateur) {
            const prestataires = await _service.recupererPrestataires();
            const prestataire = await prestataires.find(prestataire => prestataire.email === email);

            // Si l'email n'existe pas pour un prestataire, affiche une alerte
            if (!prestataire) {
                alert('Erreur, email introuvable');
            } else {
                // Si l'email existe pour un prestataire, vérifie si le mot de passe correspond
                if (prestataire.motDePasse === motDePasse) {
                    // Si le mot de passe correspond, envois l'id dans le localStorage et redirige vers la page d'accueil prestataire
                    localStorage.setItem('id', prestataire.id)
                    _navigate('/prestataire');
                } else {
                    // Si le mot de passe ne correspond pas, affiche une alerte
                    alert('Erreur, mot de passe incorrect');
                }
            }
        }
        else { // Si l'email existe pour un utilisateur, vérifie si le mot de passe correspond
            if (utilisateur.motDePasse === motDePasse) {
                // Si le mot de passe correspond, envois l'id dans le localStorage et redirige vers la page d'accueil utilisateur ou admin
                switch (utilisateur.role) {
                    case 'admin':
                        localStorage.setItem('id', utilisateur.id)
                        _navigate('/admin');
                        break;
                    case 'client':
                        localStorage.setItem('id', utilisateur.id)
                        _navigate('/client');
                        break;
                    default:
                        alert('Erreur, role introuvable');
                        break;
                }
            }
            else {
                // Si le mot de passe ne correspond pas, affiche une alerte
                alert('Erreur, mot de passe incorrect');
            }
        }
    }

    return (
        <div className='formulaireConnexion'>
            <p className='bonjour'>Bonjour !</p>
            <p className='connectezVous'>Connectez-vous pour avoir accès à plus de contenu !</p>
            <div className='formConnexion'>
                <label className='labelConnexion' htmlFor="email">Email
                    <span className='labelSpan'>*</span>
                </label>
                <input className='inputConnexion' type="text" onChange={(e) => setEmail(e.target.value)} />
                <label className='labelConnexion' htmlFor="motDePasse">Mot de passe
                    <span className='labelSpan'>*</span>
                </label>
                <input className='inputConnexion' type="password" onChange={(e) => setMotDePasse(e.target.value)} />
                <p className='obligatoires'><span className='etoileObligatoire'>*</span> champs obligatoires</p>
                <button className='boutonSeConnecter' onClick={seConnecter} >Se Connecter</button>
            </div>
            <span className='nouveauPrestataire'>Nouveau Prestataire ?</span>
            <span><Link className='lienCreerUnCompte' to='/inscription'>Créer un compte</Link></span>
        </div>
    );
};

export default FormulaireConnexion;