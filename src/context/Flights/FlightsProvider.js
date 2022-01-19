//ESTADO GLOBAL:
import React, { useReducer } from "react";
import FlightsContext from "./FlightsContext";
import FlightsReducer from "./ FlightsReducer";
import axiosClient from "./../../config/axios";

//INITIAL STATE
const FlightsProvider = (props) => {
  const initialState = {
    fligths: [],
    flightsDetails: {
      origin: "",
      destination: "",
      scheduledOff: "",
      timeEstimated: "",
      scheduledOn: "",
      status: "",
      type: "",
    },
  };
};

//CONFIGURACION DE REDUCER Y CREACION DE ESTADO GLOBAL

//FUNCIONES DE CAMBIO EN ESTADO GLOBAL

//RETORNO
