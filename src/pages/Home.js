import React, { useEffect, useState, useContext } from "react";
import AirportsContext from "../context/Airports/AirportsContext";

const Home = () => {
  //ESTADO GLOBAL
  const airportContext = useContext(AirportsContext);
  const { airports, getAirports } = airportContext;
  const [seats, setSeats] = useState(0);

  useEffect(() => {
    getAirports();
  }, []);
  return (
    <>
      <div className="banner"></div>
      <div className="main-container">
        <form action="/flights">
          <h1 className="header-card">TakoFly</h1>
          <section className="container mt">
            <label>Origen:</label>
            <select className="input-outline" id="origin" name="origin">
              {airports.map((city, index) => {
                return (
                  <option className="input-li" key={index} value={city.name}>
                    {city.name}
                  </option>
                );
              })}
            </select>
            <label>Destino:</label>
            <select
              className="input-outline"
              id="destination"
              name="destination"
            >
              {airports.map((city, index) => {
                return (
                  <option className="input-li" key={index} value={city.name}>
                    {city.name}
                  </option>
                );
              })}
            </select>
            <br />
            <label className="mt">Pasajeros</label>
            <div className="row">
              <button
                className="btn-outline"
                type="button"
                onClick={() => seats > 0 && setSeats(seats - 1)}
              >
                -
              </button>
              <p className="seats"> {seats} </p>
              <button
                type="button"
                className="btn-outline"
                onClick={() => setSeats(seats + 1)}
              >
                +
              </button>
            </div>

            <button className="btn" type="submit">
              Buscar vuelos
            </button>
          </section>
        </form>
      </div>
    </>
  );
};

export default Home;
