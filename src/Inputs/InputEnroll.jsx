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
          <label>
            <p>Имя</p>
            <input
              type="text"
              value={data.username}
              onChange={(event) => handleInputChange(event, "username")}
            ></input>
          </label>
          <label>
            <p>Дата</p>
            <input
              type="date"
              value={data.date}
              onChange={(event) => handleInputChange(event, "date")}
            ></input>
          </label>
          <label>
            <p>Время</p>
            <input
              type="time"
              value={data.time}
              onChange={(event) => handleInputChange(event, "time")}
            ></input>
          </label>
          <label>
            <p>Телефон</p>

            <input
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
          Отправить
        </button>
      </form>
    </div>
  );
}

export default InputEnroll;
