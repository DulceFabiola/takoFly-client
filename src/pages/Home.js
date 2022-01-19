import axios from "axios";
import React, { useEffect, useState } from "react";
import API from "../services/api";
const Home = () => {
  const [airplanes, setAirplanes] = useState(["Mexico", "Acapulco", "Cancun"]);
  const [seats, setSeats] = useState(0);

  const getAirplanes = async () => {
    try {
      const dataAirplanes = await API.getAllAirplanes();
      return dataAirplanes.airports;
    } catch (error) {
      console.log(error);
      console.log("error");
    }
  };
  useEffect(() => {
    // getAirplanes();
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
              {airplanes.map((city, index) => {
                return (
                  <option className="input-li" key={index} value={city}>
                    {city}
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
              {airplanes.map((city, index) => {
                return (
                  <option className="input-li" key={index} value={city}>
                    {city}
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
