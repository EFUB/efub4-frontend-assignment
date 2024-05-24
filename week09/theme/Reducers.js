import * as actions from "./Actions";
import { combineReducers } from "redux";

const preferences = (state = { darkThemeEnabled: false }, action) => {
  switch (action.type) {
    case actions.TOGGLE_DARKTHEME:
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled };

    default:
      return state;
  }
};

export default combineReducers({ preferences });
