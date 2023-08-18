import { Link } from "react-router-dom";
import blackRhomb from "../imag/blackRhomb.svg";
import styles from "./Shop.module.css";
import Goods from "./Goods";

const Shop = () => {
  return (
    <section className={styles.shop}>
      <div className="container">
        <h2 className={styles.shopTitle}>BARBERSHOP BORODINSKI — МАГАЗИН</h2>
        <ul>
          <li>
            <Link
              to=".."
              relative="path"
              className="backLink"
            >
              Главная
            </Link>
          </li>
          <img
            className={styles.blackRhomb}
            src={blackRhomb}
          />
          <li>
            <Link
              to="."
              relative="path"
              className="link"
            >
              Магазин
            </Link>
          </li>
        </ul>
        <div>
          <Goods />
        </div>
      </div>
    </section>
  );
};

export default Shop;
