import React, { useState, useEffect, useContext } from "react";
import DetailsReservation from "../components/DetailsReservation";
import AirportsContext from "../context/Airports/AirportsContext";
import useQuery from "./../context/Airports/useQuery";
import { Link } from "react-router-dom";

const Flights = () => {
  const [reservations, setReservations] = useState([]);

  let query = useQuery();
  const airportContext = useContext(AirportsContext);
  const { airports, getAirports } = airportContext;
  const [originSearch] = useState(query.get("origin"));
  const [destinationSearch] = useState(query.get("destination"));

  const [airportsLocal, setAirportsLocal] = useState([]);
  useEffect(() => {
    getAirports();
  }, []);
  useEffect(() => {
    setAirportsLocal(airports);
    if (
      originSearch &&
      originSearch.length &&
      destinationSearch &&
      destinationSearch.length
    ) {
      const newSearch = airports.filter(
        (element) =>
          element.origin === originSearch &&
          element.destiny === destinationSearch
      );
      setAirportsLocal([...newSearch]);
    }
  }, [originSearch, airports]);
  console.log(airportsLocal);

  const AddFlights = (_id) => {
    setReservations([...reservations, _id]);
  };
  return (
    <>
      <div className="grid-container">
        {airportsLocal.length > 0 ? (
          airportsLocal.map((city, index) => {
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
                <button
                  className="btn"
                  type="submit"
                  onClick={() => AddFlights(city._id)}
                >
                  Seleccionar
                </button>
              </div>
            );
          })
        ) : (
          <div>
            <h2>Coincidencias no encontradas</h2>
            <Link to={"/"}>Realiza otra búsqueda</Link>
          </div>
        )}
      </div>
      <DetailsReservation />
    </>
  );
};

export default Flights;
