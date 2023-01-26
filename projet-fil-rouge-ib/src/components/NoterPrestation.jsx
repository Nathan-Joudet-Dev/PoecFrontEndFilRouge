import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/noterPrestation.css'
import Service from '../assets/ApiService';

const NoterPrestation = ({ prestation }) => {

    const [qualiteGlobale, setQualiteGlobale] = useState(0);
    const [communication, setCommunication] = useState(0);
    const [dossierTechnique, setDossierTechnique] = useState(0);
    const [expertise, setExpertise] = useState(0);

    const _navigate = useNavigate();
    const _service = new Service();

    const [prestationNotee, setPrestationNotee] = useState({})

    // Récupère la prestation à noter dans un state
    useEffect(() => {
        setPrestationNotee(prestation)
    })

    const noteQualiteGlobale = (e) => {
        setQualiteGlobale(parseInt(e.target.value));
    };

    const noteCommunication = (e) => {
        setCommunication(parseInt(e.target.value));
    };

    const noteDossierTechnique = (e) => {
        setDossierTechnique(parseInt(e.target.value));
    };

    const noteExpertise = (e) => {
        setExpertise(parseInt(e.target.value));
    };

    function retourNotation() {
        _navigate(-1);
    };

    /**
     * Vérifie que toutes les catégories ont été notées, puis ajoute les notes pour la prestation
     */
    async function validerNotations() {
        if (qualiteGlobale === 0 || communication === 0 || dossierTechnique === 0 || expertise === 0) {
            alert('Erreur, veuillez noter toutes les catégories');
        }
        else {
            prestationNotee.noteQualiteGlobale = qualiteGlobale;
            prestationNotee.noteCommunication = communication;
            prestationNotee.noteDossierTechnique = dossierTechnique;
            prestationNotee.noteExpertise = expertise;
            prestationNotee.noteMoyenne = (qualiteGlobale + communication + dossierTechnique + expertise) / 4;
            prestationNotee.etat = 'Archivée';

            await _service.noterPrestation(prestationNotee);
            alert("Merci d'avoir noté cette prestation !")
            _navigate(-1);
        }
    };

    return (
        <>
            <div className='noterPrestation'>
                <h1 className='titreEvaluerPrestation'>EVALUER CETTE PRESTATION</h1>
                <div className='divQualiteGlobale'>
                    <label className='labelNotation' htmlFor="qualiteGlobale">1. La qualité globale de la prestation</label>
                    <input className='inputNotation' type="radio" name="qualiteGlobale" value='1' onChange={noteQualiteGlobale} />
                    <input className='inputNotation' type="radio" name="qualiteGlobale" value='2' onChange={noteQualiteGlobale} />
                    <input className='inputNotation' type="radio" name="qualiteGlobale" value='3' onChange={noteQualiteGlobale} />
                    <input className='inputNotation' type="radio" name="qualiteGlobale" value='4' onChange={noteQualiteGlobale} />
                    <input className='inputNotation' type="radio" name="qualiteGlobale" value='5' onChange={noteQualiteGlobale} />
                </div>
                <div className='divCommunication'>
                    <label className='labelNotation' htmlFor="communication">2. La facilité de communication</label>
                    <input className='inputNotation' type="radio" name="communication" value='1' onChange={noteCommunication} />
                    <input className='inputNotation' type="radio" name="communication" value='2' onChange={noteCommunication} />
                    <input className='inputNotation' type="radio" name="communication" value='3' onChange={noteCommunication} />
                    <input className='inputNotation' type="radio" name="communication" value='4' onChange={noteCommunication} />
                    <input className='inputNotation' type="radio" name="communication" value='5' onChange={noteCommunication} />
                </div>
                <div className='divDossierTechnique'>
                    <label className='labelNotation' htmlFor="dossierTechnique">3. La qualité du dossier technique fournit</label>
                    <input className='inputNotation' type="radio" name="dossierTechnique" value='1' onChange={noteDossierTechnique} />
                    <input className='inputNotation' type="radio" name="dossierTechnique" value='2' onChange={noteDossierTechnique} />
                    <input className='inputNotation' type="radio" name="dossierTechnique" value='3' onChange={noteDossierTechnique} />
                    <input className='inputNotation' type="radio" name="dossierTechnique" value='4' onChange={noteDossierTechnique} />
                    <input className='inputNotation' type="radio" name="dossierTechnique" value='5' onChange={noteDossierTechnique} />
                </div>
                <div className='divExpertise'>
                    <label className='labelNotation' htmlFor="expertise">4. Le niveau d'expertise</label>
                    <input className='inputNotation' type="radio" name="expertise" value='1' onChange={noteExpertise} />
                    <input className='inputNotation' type="radio" name="expertise" value='2' onChange={noteExpertise} />
                    <input className='inputNotation' type="radio" name="expertise" value='3' onChange={noteExpertise} />
                    <input className='inputNotation' type="radio" name="expertise" value='4' onChange={noteExpertise} />
                    <input className='inputNotation' type="radio" name="expertise" value='5' onChange={noteExpertise} />
                </div>
                <div className='boutonsNotation'>
                    <button className='boutonRetour' onClick={retourNotation}>Retour</button>
                    <button className='boutonValider' onClick={validerNotations}>Valider</button>
                </div>
            </div>
        </>
    );
};

export default NoterPrestation;
