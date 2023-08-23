import React from "react";
import notFound from "../assets/image/404.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";


export default function NotFound() {
  return (
    <>
      <div className="notFound">
        <img src={notFound} alt="La page demander n'existe pas" />
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to={ROUTES.HOME}>Retourner sur la page d'accueil</Link>
      </div>
    </>
  );
}
