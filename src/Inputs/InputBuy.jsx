import { useState } from "react";
import styles from "./InputBye.module.css";

function InputBuy() {
  const [data, setData] = useState({
    email: "",
    tel: null,
  });

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  function handleInputChange(event, name) {
    setData({ ...data, [name]: event.target.value });
  }

  return (
    <div className={styles.buy}>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.wrapperBuy}>
          <label
            for="person-name"
            className="hiddenElement"
          >
            Имя
          </label>
          <input
            id="person-name"
            type="email"
            value={data.username}
            placeholder="ИМЯ"
            onChange={(event) => handleInputChange(event, "username")}
          ></input>

          <label
            for="person-phone"
            className="hiddenElement"
          >
            Телефон
          </label>
          <input
            id="person-phone"
            placeholder="ТЕЛЕФОН"
            type="tel"
            value={data.tel}
            onChange={(event) => handleInputChange(event, "tel")}
          ></input>
          <button
            className="button"
            type="submit"
          >
            Заказать
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputBuy;
