import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFirstCurrency,
  getInputValue,
  getSecondCurrency,
} from "../../store/selectors";
import { allCurrencies } from "../../api/allCurrencies";
import {
  CHANGE_FIRST_CURRENCY,
  CHANGE_SECOND_CURRECNY,
  UPDATE_RESULT,
} from "../../constants";

import styles from "./Select.module.scss";

interface SelectProps {
  isSecondCurrency: boolean;
}

export const Select: FC<SelectProps> = ({ isSecondCurrency }) => {
  const dispatch = useDispatch();
  const inputValue = useSelector(getInputValue);
  const firstCurrency = useSelector(getFirstCurrency);
  const secondCurrency = useSelector(getSecondCurrency);

  const firstSelectDiaptches = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: CHANGE_FIRST_CURRENCY,
      payload: e.target.value,
    });
    dispatch({
      type: UPDATE_RESULT,
      payload: {
        firstCurrencyRate: allCurrencies[e.target.value],
        secondCurrencyRate: allCurrencies[secondCurrency],
        inputValue,
      },
    });
  };

  const secondSelectDiaptches = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: CHANGE_SECOND_CURRECNY,
      payload: e.target.value,
    });
    dispatch({
      type: UPDATE_RESULT,
      payload: {
        firstCurrencyRate: allCurrencies[firstCurrency],
        secondCurrencyRate: allCurrencies[e.target.value],
        inputValue,
      },
    });
  };

  return (
    <select
      className={styles.select}
      onChange={isSecondCurrency ? secondSelectDiaptches : firstSelectDiaptches}
      name=""
      id=""
    >
      {Object.entries(allCurrencies).map(([currency]) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};
