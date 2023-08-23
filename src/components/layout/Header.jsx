import React from "react";
import { NavLink} from "react-router-dom";
import logoHeader from "../../assets/image/Logo-header.png";
import { ROUTES } from "../../constants/routes";

export default function Header() {
  return (
    <header>
      <img src={logoHeader} alt="logo de kasa" />
      <nav>
        <ul>
          <li>
            <NavLink
              to={ROUTES.HOME}
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.ABOUT}
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
