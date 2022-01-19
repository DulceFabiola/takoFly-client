//funciones que modificaran el estado global

const reducer = (globalState, action) => {
  switch (action.type) {
    case "GET_AIRPORTS":
      return {
        ...globalState,
        airports: action.payload,
      };
    default:
      return globalState;
  }
};
export default reducer;
