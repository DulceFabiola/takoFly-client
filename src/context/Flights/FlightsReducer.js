const reducer = (globalState, action) => {
  switch (action.type) {
    case "GET_FLIGHTS":
      return {
        ...globalState,
        flights: action.payload,
      };
    case "GET_FLIGHT":
      return {
        ...globalState,
        flightsDetails: action.payload,
      };

    case "ADD_SEAT":
      return {
        ...globalState,
        seats: action.payload,
      };
    default:
      return globalState;
  }
};
export default reducer;
