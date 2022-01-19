import React, { useState } from "react";
import CardFligth from "../components/CardFligth";
import DetailsReservation from "../components/DetailsReservation";

const Flights = (fligths) => {
  const [reservations, setReservations] = useState([]);
  return (
    <>
      <div className="grid-container">
        <CardFligth />
        <CardFligth />
        <CardFligth />
      </div>
      <DetailsReservation />
    </>
  );
};

export default Flights;
