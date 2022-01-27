import React, { useEffect, useState, useContext } from "react";
import AirportsContext from "../context/Airports/AirportsContext";

const Home = () => {
  //ESTADO GLOBAL
  const airportContext = useContext(AirportsContext);
  const { airports, getAirports } = airportContext;
  const [seats] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

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

            <select className="input-outline" id="seats" name="seats">
              {seats.map((number, index) => {
                return (
                  <option className="input-li" key={index} value={number}>
                    {number}
                  </option>
                );
              })}
            </select>
          </section>
          <button className="btn" type="submit">
            Buscar vuelos
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
