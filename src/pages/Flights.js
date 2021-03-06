import React, { useState, useEffect, useContext } from "react";
import FlightsContext from "../context/Flights/FlightsContext";
import useQuery from "./../context/Airports/useQuery";
import { Link } from "react-router-dom";

const Flights = () => {
  const [reservations, setReservations] = useState([]);

  let query = useQuery();
  const flightCtx = useContext(FlightsContext);
  const { flights, getFlights, addSeat } = flightCtx;
  const [originSearch] = useState(query.get("origin"));
  const [destinationSearch] = useState(query.get("destination"));
  const [seatsSearch] = useState(query.get("seats"));

  const [flightsLocal, setFlightsLocal] = useState([]);
  useEffect(() => {
    getFlights();
    addSeat(seatsSearch);
  }, []);
  useEffect(() => {
    setFlightsLocal(flights);
    if (
      originSearch &&
      originSearch.length &&
      destinationSearch &&
      destinationSearch.length
    ) {
      const newSearch = flights.filter(
        (element) =>
          element.origin === originSearch &&
          element.destiny === destinationSearch
      );
      setFlightsLocal([...newSearch]);
    }
  }, [originSearch, flights]);

  const AddFlights = (_id) => {
    setReservations([...reservations, _id]);
  };
  return (
    <>
      <div className="grid-container">
        {flightsLocal.length > 0 ? (
          flightsLocal.map((city, index) => {
            return (
              <div className="card" key={index}>
                <p>
                  <b>Origen:</b> {city.origin}
                </p>
                <p>
                  <b>Destino:</b> {city.destiny}
                </p>
                <em className="center">---Horario---</em>
                <p>
                  <b>Despegue:</b> {city.start}
                </p>
                <p>
                  <b>Aterrizaje:</b> {city.end}
                </p>
                <p>
                  <b>Price:</b> {city.price}
                </p>
                <Link to={`/flights/${city._id}`}>
                  <button
                    className="btn"
                    type="submit"
                    onClick={() => AddFlights(city._id)}
                  >
                    Seleccionar vuelo
                  </button>
                </Link>
              </div>
            );
          })
        ) : (
          <div>
            <h2>Coincidencias no encontradas</h2>
            <Link to={"/"}>Realiza otra b??squeda</Link>
          </div>
        )}
      </div>
      {/* <DetailsReservation reservations={reservations} /> */}
    </>
  );
};

export default Flights;
