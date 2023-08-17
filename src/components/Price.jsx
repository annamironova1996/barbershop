import { Link } from "react-router-dom";
import styles from "./Price.module.css";
import ModalEnroll from "../modals/ModalEnroll";
import blackRhomb from "../imag/blackRhomb.svg";

const Price = () => {
  return (
    <section className={styles.price}>
      <div className="container">
        <h2>Прайс-лист</h2>
        <ul className={styles.priceNav}>
          <li>
            <Link
              to=".."
              relative="path"
              className="backLink"
            >
              Главная
            </Link>
          </li>
          <img src={blackRhomb} />
          <li>
            <Link
              to="."
              relative="path"
              className="link"
            >
              Прайс-лист
            </Link>
          </li>
        </ul>
        <div className={styles.wrapperTitle}>
          <div className={styles.priceLine}></div>
          <p className={styles.priceTitle}>Истинно мужская классика</p>
          <div className={styles.priceLine}></div>
        </div>
        <div className={styles.wrapperBlocks}>
          <section className={styles.blockMeans}>
            <h3>
              Мы используем только
              <br />
              лучшие средства:
            </h3>
            <ul>
              <li>
                <img src={blackRhomb} />
                <p>Baxter of California</p>
              </li>
              <li>
                <img src={blackRhomb} />
                <p>Mr Natty</p>
              </li>
              <li>
                <img src={blackRhomb} />
                <p>Suavecito</p>
              </li>
              <li>
                <img src={blackRhomb} />
                <p>Malin+Goetz</p>
              </li>
            </ul>
          </section>
          <section className={styles.blockPrice}>
            <h3>
              Цены на услуги
              <br />
              наших мастеров:
            </h3>
            <table>
              <tr>
                <td>Стрижка</td>
                <td>1500 р</td>
              </tr>
              <tr>
                <td>Стрижка бороды</td>
                <td>500 р</td>
              </tr>
              <tr>
                <td>Накрутка усов</td>
                <td>350 р</td>
              </tr>
            </table>
          </section>
          <section className={styles.blockDescription}>
            <div className={styles.descriptionAbout}>
              <h3>Несколько слов о нас:</h3>
              <p>
                Наша парикмахерская занимается исключительно мужскими
                <br /> стрижками. Стрижка каждого клиента для нас - это
                уникальная
                <br /> и продуманная до мелочей работа, мы не работаем на <br />
                количество, мы делаем качество.
              </p>
            </div>
            <div className={styles.descriptionWithButton}>
              <ModalEnroll />
              <p>
                Наша мастерская расположена в центре города, поэтому
                <br />
                сделать стильную стрижку можно в любое время, даже в <br />
                обеденный перерыв, здесь вы можете погрузиться в удобную <br />
                для вас атмосферу, чувствовать себя комфортно и свободно!
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Price;
