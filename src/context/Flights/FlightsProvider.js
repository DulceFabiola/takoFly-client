//ESTADO GLOBAL:
import React, { useReducer, useState } from "react";
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
    seats: 0,
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

  //GET ONE FLIGHT
  const getFlight = async (flightId) => {
    const res = await axiosClient.get(`flights/readone/${flightId}`);
    const selectedFlight = res.data.data;
    dispatch({
      type: "GET_FLIGHT",
      payload: selectedFlight,
    });
  };
  //ADD SEAT
  const addSeat = (seats) => {
    dispatch({
      type: "ADD_SEAT",
      payload: seats,
    });
  };

  //RETORNO
  return (
    <FlightsContext.Provider
      value={{
        flights: globalState.flights,
        flightsDetails: globalState.flightsDetails,
        seats: globalState.seats,
        getFlights,
        getFlight,
        addSeat,
      }}
    >
      {props.children}
    </FlightsContext.Provider>
  );
};
export default FlightsProvider;
