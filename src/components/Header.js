import React from "react";
import { NavLink } from "react-router-dom";
import
const Header = () => {
  return (
    <header>
      <img class="logo" src="../assets/ricketmorty.png" alt="Logo"/>
      <nav>
        <ul>
          <NavLink
            to="/"
            className="home"
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/characters"
            className="characters"
          >
            <li>Personnages</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;