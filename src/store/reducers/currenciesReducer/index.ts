import { currencies, currenciesAction } from "./types";
import { CHANGE_FIRST_CURRENCY, CHANGE_SECOND_CURRECNY } from "../../../constants";

const initState = { firstCurrency: "AUD", secondCurrency: "AUD" };

export const currenciesReducer = (
  state = initState,
  action: currenciesAction
): currencies => {
  switch (action.type) {
    case CHANGE_FIRST_CURRENCY:
      return { ...state, firstCurrency: action.payload ? action.payload : "" };
    case CHANGE_SECOND_CURRECNY:
      return { ...state, secondCurrency: action.payload ? action.payload : "" };

    default:
      return state;
  }
};
