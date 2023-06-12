import axios from "axios";

export const URL =
  "https://api.freecurrencyapi.com/v1/latest?apikey=2YuXcwff2K5S6nbvPLVODQ5xZjPM7t8XD1Zd05lw";

const getAllCurrencies = async () => {
  const res = await axios.get(URL).then((res) => res.data.data);
  return res;
};

export const allCurrencies = await getAllCurrencies();
