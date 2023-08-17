import { useState } from "react";
import styles from "./InputRegister.module.css";

const InputRegister = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  function handleInputChange(event, name) {
    setData({ ...data, [name]: event.target.value });
  }

  return (
    <div className={styles.register}>
      <h2 className="modalTitle">Личный кабинет</h2>
      <p className="modalSubtitle">Введите свой логин и пароль</p>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.registerColumn}>
          <label>
            <input
              type="email"
              value={data.email}
              placeholder="ЛОГИН"
              onChange={(event) => handleInputChange(event, "email")}
            ></input>
          </label>
          <label>
            <input
              type="password"
              placeholder="ПАРОЛЬ"
              value={data.password}
              onChange={(event) => handleInputChange(event, "password")}
            ></input>
          </label>
          <button
            className="button"
            type="submit"
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputRegister;
