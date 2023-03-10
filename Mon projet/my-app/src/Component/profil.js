import Root from "../Routes/root.js";
import '../Css/profil.css'
import React, { useContext } from 'react';
import { UserContext } from './LoginForm';


export default function Profils() {

    return (
        <div id="profil">
            <Root />
            <div className="profilPage">
                <h1>Your Profile</h1>
                <div>
                    <h1>Tableau de bord</h1>
                    <p>Bienvenue, {}!</p>
                    <p>Votre adresse e-mail est {}.</p>
                </div>
                <button>Edit Profil</button>
            </div>

        </div>
    );
}
