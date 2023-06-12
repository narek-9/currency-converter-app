import { RootState } from "..";

export const getResult = (store: RootState) => store.result.result;

export const getInputValue = (store: RootState) => store.input.value;

export const getFirstCurrency = (store: RootState) =>
  store.currencies.firstCurrency;

export const getSecondCurrency = (store: RootState) =>
  store.currencies.secondCurrency;
