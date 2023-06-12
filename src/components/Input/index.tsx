import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFirstCurrency,
  getInputValue,
  getResult,
  getSecondCurrency,
} from "../../store/selectors";
import { allCurrencies } from "../../api/allCurrencies";
import { CHANGE_INPUT_VALUE, UPDATE_RESULT } from "../../constants";

import styles from "./Input.module.scss";

interface InputProps {
  isResultInput: boolean;
}

export const Input: FC<InputProps> = ({ isResultInput }) => {
  const dispatch = useDispatch();
  const result = useSelector(getResult).toFixed(2);
  const inputValue = useSelector(getInputValue);
  const firstCurrency = useSelector(getFirstCurrency);
  const secondCurrency = useSelector(getSecondCurrency);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: CHANGE_INPUT_VALUE,
      payload: e.target.value,
    });
    dispatch({
      type: UPDATE_RESULT,
      payload: {
        firstCurrencyRate: allCurrencies[firstCurrency],
        secondCurrencyRate: allCurrencies[secondCurrency],
        inputValue: e.target.value,
      },
    });
  };

  return isResultInput ? (
    <input
      className={styles.input}
      value={+result > 0 ? result : ""}
      onChange={() => {}}
      type="text"
    />
  ) : (
    <input
      className={styles.input}
      value={inputValue ? inputValue : ""}
      onChange={handleInputChange}
      placeholder={`Enter amount of ${firstCurrency}`}
      type="number"
    />
  );
};
