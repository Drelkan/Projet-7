import React from 'react'
import logoHeader from "../../assets/image/Logo-header.png"
import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <header>
        <img src={logoHeader} alt="logo de kasa" />
        <nav>
            <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive}) =>
                      isActive ? "active" : ""
                    }
                  >
                    Accueil
                  </NavLink>
                </li>
                <li>
                <NavLink
                    to="/a-propos"
                    className={({ isActive}) =>
                      isActive ? "active" : ""
                    }
                  >
                    A Propos
                  </NavLink>

                </li>
            </ul>
        </nav>
    </header>
  )
}
