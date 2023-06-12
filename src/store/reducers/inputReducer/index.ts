import { input, inputAction } from "./types";
import { CHANGE_INPUT_VALUE } from "../../../constants";

const initState = { value: 0 };

export const inputReducer = (
  state = initState,
  action: inputAction
): input => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return { ...state, value: action.payload ? action.payload : 0 };

    default:
      return state;
  }
};
