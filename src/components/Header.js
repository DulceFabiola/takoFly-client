import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <nav className="nav-bar">
          <ul>
            <li>
              <Link to="/">
                <div>
                  <img
                    className="iconApp"
                    src="./../../travel.png"
                    alt="taco-fly-icon"
                  />
                  <span>TacoFly</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/flights">Vuelos</Link>
            </li>
            <li>
              <Link to="/my-reservations">Mis reservas</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
