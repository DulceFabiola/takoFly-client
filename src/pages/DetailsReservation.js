import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import UserForm from "../components/UserForm";
import FlightsContext from "../context/Flights/FlightsContext";

const DetailsReservation = () => {
  const flightCtx = useContext(FlightsContext);
  const { flightsDetails, getFlight, seats } = flightCtx;

  //obtener el id del vuelo de la url
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getFlight(id);
  }, []);

  return (
    <div className="container">
      <h2>Mis reservaciones</h2>
      {
        <div>
          <h3>Vuelo</h3>
          <p>Detalles del vuelo: {flightsDetails._id}</p>
          <p>Salida: {flightsDetails.origin}</p>
          <p>Destino: {flightsDetails.destiny}</p>
          <p>Fecha: {flightsDetails.date}</p>
          <h3>Pasajeros</h3>
          <p>Asientos: {seats}</p>
          <h3>Total</h3>
          <p>Total: ${flightsDetails.price * seats}</p>
        </div>
      }
      <Link to="/user">
        <button className="btn">Siguiente</button>
      </Link>
    </div>
  );
};

export default DetailsReservation;
