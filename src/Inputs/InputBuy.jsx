import { useState } from "react";
import styles from "./InputBye.module.css";

function InputBuy() {
  const [data, setData] = useState({
    username: "",
    tel: "",
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
          <label>
            <input
              type="text"
              value={data.username}
              placeholder="ИМЯ"
              onChange={(event) => handleInputChange(event, "username")}
            ></input>
          </label>
          <label>
            <input
              placeholder="ТЕЛЕФОН"
              type="tel"
              value={data.tel}
              onChange={(event) => handleInputChange(event, "tel")}
            ></input>
          </label>
        </div>
        <button
          className="button"
          type="submit"
        >
          Заказать
        </button>
      </form>
    </div>
  );
}

export default InputBuy;
