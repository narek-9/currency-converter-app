import { Select } from "./components/Select";
import { Input } from "./components/Input";
import Arrow from "./img/arrow.png";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Currency Converter</h1>
      <div className={styles.container}>
        <div className={styles.box}>
          <Select isSecondCurrency={false} />
          <Input isResultInput={false} />
        </div>
        <div className={styles.arrow}>
          <img width={50} height={50} src={Arrow} alt="Arrow" />
        </div>
        <div className={styles.box}>
          <Select isSecondCurrency />
          <Input isResultInput />
        </div>
      </div>
    </div>
  );
}

export default App;
