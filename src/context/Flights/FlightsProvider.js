//ESTADO GLOBAL:
import React, { useReducer } from "react";
import FlightsContext from "./FlightsContext";
import FlightsReducer from "./FlightsReducer";
import axiosClient from "./../../config/axios";

//INITIAL STATE
const FlightsProvider = (props) => {
  const initialState = {
    flights: [],
    flightsDetails: {
      _id: "",
      origin: "",
      destiny: "",
      end: "",
      start: "",
    },
  };
  //CONFIGURACION DE REDUCER Y CREACION DE ESTADO GLOBAL
  const [globalState, dispatch] = useReducer(FlightsReducer, initialState);

  //FUNCIONES DE CAMBIO EN ESTADO GLOBAL
  //GET FLIGHTS
  const getFlights = async () => {
    const res = await axiosClient.get("flights/readAll");
    const flightsList = res.data.data;
    dispatch({
      type: "GET_FLIGHTS",
      payload: flightsList,
    });
  };
  //RETORNO
  return (
    <FlightsContext.Provider
      value={{
        flights: globalState.flights,
        flightsDetails: globalState.flightsDetails,
        getFlights,
      }}
    >
      {props.children}
    </FlightsContext.Provider>
  );
};
export default FlightsProvider;
