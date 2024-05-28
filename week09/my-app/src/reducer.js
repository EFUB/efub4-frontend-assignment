const initialState = {
  backgroundColor: "black",
};
export default function reducer(currentState = initialState, action) {
  const newState = { ...currentState };
  switch (action.type) {
    case "white":
      newState.backgroundColor = "white";
      break;
  }
  return newState;
}
