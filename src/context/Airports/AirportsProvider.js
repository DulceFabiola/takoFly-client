//ESTADO GLOBAL:
import React, { useReducer } from "react";
import AirportsContext from "./AirportsContext";
import AirportsReducer from "./AirportsReducer";
import axiosClient from "./../../config/axios";

//INITIAL STATE
const AirportProvider = (props) => {
  const initialState = {
    airports: [],
    airportDetails: {
      name: "",
      code: "",
    },
  };
  //CONFIGURACION DE REDUCER Y CREACION DE ESTADO GLOBAL
  const [globalState, dispatch] = useReducer(AirportsReducer, initialState);

  //FUNCIONES DE CAMBIO EN ESTADO GLOBAL
  //GET AIRPORTS
  const getAirports = async () => {
    const res = await axiosClient.get("airports/readAll");
    const list = res.data.data;
    dispatch({
      type: "GET_AIRPORTS",
      payload: list,
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
