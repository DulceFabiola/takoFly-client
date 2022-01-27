const reducer = (globalState, action) => {
  switch (action.type) {
    case "GET_FLIGHTS":
      return {
        ...globalState,
        flights: action.payload,
      };
    default:
      return globalState;
  }
};
export default reducer;
