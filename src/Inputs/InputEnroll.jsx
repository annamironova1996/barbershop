import { useState } from "react";
import styles from "./InputEnroll.module.css";

function InputEnroll() {
  const [data, setData] = useState({
    username: "",
    time: "",
    date: "",
    tel: "",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  function handleInputChange(event, name) {
    setData({ ...data, [name]: event.target.value });
  }

  return (
    <div className={styles.appointment}>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.wrapperAppointment}>
          <p>
            <label for="user-name">Имя</label>

            <input
              id="user-name"
              type="text"
              value={data.username}
              onChange={(event) => handleInputChange(event, "username")}
            ></input>
          </p>

          <p>
            <label for="some-date">Дата</label>

            <input
              id="some-date"
              type="date"
              value={data.date}
              onChange={(event) => handleInputChange(event, "date")}
            ></input>
          </p>

          <p>
            <label for="some-time">Время</label>

            <input
              id="some-time"
              type="time"
              value={data.time}
              onChange={(event) => handleInputChange(event, "time")}
            ></input>
          </p>

          <p>
            <label for="user-tel">Телефон</label>

            <input
              id="user-tel"
              type="tel"
              value={data.tel}
              onChange={(event) => handleInputChange(event, "tel")}
            ></input>
          </p>
        </div>
        <button
          className="button"
          type="submit"
        >
          Отправить
        </button>
      </form>
    </div>
  );
}

export default InputEnroll;
