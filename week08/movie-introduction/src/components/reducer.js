import { act } from "react";

const initialState = {
  backgroundColor: "black",
  fontColor: "white",
};

function reducer(currentState = initialState, action) {
  switch (action.type) {
    case "white":
      return {
        ...currentState,
        backgroundColor: "white",
        fontColor: "black",
      };

    case "black":
      return {
        ...currentState,
        backgroundColor: "black",
        fontColor: "white",
      };

    default:
      return currentState;
  }
}

export default reducer;
