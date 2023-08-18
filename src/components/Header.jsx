import { NavLink, Link } from "react-router-dom";
import ModalEnroll from "../modals/ModalEnroll";
import ModalRegister from "../modals/ModalRegister";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.header}>
      <nav className={styles.headerNav}>
        <ul>
          <li>
            <NavLink
              className="button"
              to="/"
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              className="button"
              to="/price"
            >
              Прайс-лист
            </NavLink>
          </li>
          <li>
            <NavLink
              className="button"
              to="shop"
            >
              Магазин
            </NavLink>
          </li>
          <li>
            <NavLink
              className="button"
              to="/news"
            >
              Новости
            </NavLink>
          </li>
          <li>
            <button
              className="button"
              type="button"
            >
              Контакты
            </button>
          </li>

          <li>
            <ModalEnroll />
          </li>
        </ul>
        <ul>
          <li>
            <ModalRegister />
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
