export interface resultAction {
  type: string;
  payload?: resultPayload;
}

interface resultPayload {
  firstCurrencyRate: number;
  secondCurrencyRate: number;
  inputValue: string;
}

export interface result {
  result: number;
}
