import { createStore, combineReducers } from "redux";
import { resultReducer } from "./reducers/resultReducer";
import { currenciesReducer } from "./reducers/currenciesReducer";
import { inputReducer } from "./reducers/inputReducer";

const rootReducer = combineReducers({
  result: resultReducer,
  currencies: currenciesReducer,
  input: inputReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
