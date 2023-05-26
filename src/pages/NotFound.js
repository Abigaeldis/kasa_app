import React from "react";
import Header from "../components/Header";
import "../styles/notfound.css";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <Header />
      <div className="notfound">
        <h1>404</h1>
        <p className="errormessage">Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/" className="nav-active homeLink">
          <p>Retourner sur la page d’accueil</p>
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
