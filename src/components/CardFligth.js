import React from "react";
import { Link } from "react-router-dom";
const CardFligth = () => {
  const AddFlights = () => {
    console.log("agregar viaje");
  };
  return (
    <>
      <div className="card">
        <p>Destino:</p>
        <div className="row">
          <p>7:00 am</p>
          <p>8:15 am</p>
        </div>

        <button className="btn" type="submit" onClick={AddFlights}>
          Seleccionar
        </button>
      </div>
    </>
  );
};

export default CardFligth;
