import React from "react";
import { Link } from "react-router-dom";

const DetailsReservation = () => {
  return (
    <div className="container scroll-container">
      <h2>Tu reservación</h2>
      <h3>Vuelo</h3>
      <p>Salida:</p>
      <p>Destino:</p>
      <p>Fecha:</p>
      <h3>Pasajeros</h3>
      <p>Asiento:</p>
      <h3>Total</h3>
      <p>Total: $1200</p>
      <Link to="/user">
        <button>Siguiente</button>
      </Link>
    </div>
  );
};

export default DetailsReservation;
