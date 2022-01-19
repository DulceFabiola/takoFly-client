import React from "react";
import { Link } from "react-router-dom";
import UserForm from "../components/UserForm";
const Reservation = () => {
  return (
    <div>
      Mis reservaciones
      <Link to="/">
        <button className="btn" type="submit">
          Buscar vuelos
        </button>
      </Link>
    </div>
  );
};

export default Reservation;
