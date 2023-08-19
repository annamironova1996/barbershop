import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

import ModalEnroll from "../modals/ModalEnroll";
import ModalRegister from "../modals/ModalRegister";
import styles from "./Header.module.css";
import door from "../imag/door.svg";

const Header = () => {
  return (
    <section className={styles.header}>
      <div className="container">
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
              <Link
                className="button"
                to="footer"
                smooth={true}
                offset={-70}
                duration={1500}
                tabIndex={0}
              >
                Контакты
              </Link>
            </li>
          </ul>
          <ul className={styles.wrapperRegister}>
            <li>
              <img src={door} />
            </li>

            <li>
              <ModalRegister />
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
