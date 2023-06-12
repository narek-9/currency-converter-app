import { result, resultAction } from "./types";
import { UPDATE_RESULT } from "../../../constants";

const initState = { result: 0 };

export const resultReducer = (
  state = initState,
  action: resultAction
): result => {
  const firstCurrencyRate = action.payload?.firstCurrencyRate || 0;
  const secondCurrencyRate = action.payload?.secondCurrencyRate || 0;
  const inputValue = action.payload?.inputValue || 0;

  switch (action.type) {
    case UPDATE_RESULT:
      return {
        ...state,
        result: (secondCurrencyRate / firstCurrencyRate) * +inputValue,
      };

    default:
      return state;
  }
};
