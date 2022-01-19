//ESTADO GLOBAL:
import React, { useReducer } from "react";
import AirportsContext from "./AirportsContext";
import AirportsReducer from "./AirportsReducer";
import axiosClient from "./../../config/axios";

//INITIAL STATE
const AirportProvider = (props) => {
  const apiKey = process.env.REACT_APP_APIKEY;
  const headers = { "x-apikey": apiKey };

  const initialState = {
    airports: [],
    airportDetails: {
      airportCode: "",
      name: "",
      city: "",
      longitude: "",
      latitude: "",
      timeZone: "",
      countryCode: "",
      fligthsUrl: "",
    },
  };
  //CONFIGURACION DE REDUCER Y CREACION DE ESTADO GLOBAL
  const [globalState, dispatch] = useReducer(AirportsReducer, initialState);

  //FUNCIONES DE CAMBIO EN ESTADO GLOBAL
  //GET AIRPORTS

  const getAirports = async () => {
    const res = await axiosClient.get("airports", { headers });
    //const airportList = res.airports;
    console.log(res);
    dispatch({
      type: "GET_AIRPORTS",
      payload: res,
    });
  };

  //RETORNO
  return (
    <AirportsContext.Provider
      value={{
        airports: globalState.airports,
        airportDetails: globalState.airportDetails,
        getAirports,
      }}
    >
      {props.children}
    </AirportsContext.Provider>
  );
};
export default AirportProvider;
