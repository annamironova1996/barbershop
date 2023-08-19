import { NavLink } from "react-router-dom";
import SimpleCarousel from "./SimpleCarousel";
import ModalMap from "../modals/ModalMap";
import ModalEnroll from "../modals/ModalEnroll";
import InputEnroll from "../Inputs/InputEnroll";
import styles from "./Home.module.css";
import logo from "../imag/index-logo.svg";
import rhomb from "../imag/rhomb.svg";
import line from "../imag/line.png";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <h1 className="hiddenElement">Барбершоп "Бородинский"</h1>
        <img
          src={logo}
          width="371px"
          height="155px"
        />

        <section className={styles.advantagesHome}>
          <h2 className="hiddenElement">Преимущества</h2>
          <ul>
            <li>
              <h3>Быстро</h3>
              <img
                src={rhomb}
                className={styles.advantagesIcons}
              />
              <p>
                Мы делаем свою работу быстро! Два часа пролетят незаметно и вы -
                счастливый обладатель стильной стрижки-минутки!
              </p>
            </li>
            <li>
              <h3>Круто</h3>
              <img
                src={rhomb}
                className={styles.advantagesIcons}
              />
              <p>
                Забудьте, как вы стриглись раньше. Мы сделаем из вас звезду
                футбола или кино! Во всяком случае внешне!
              </p>
            </li>
            <li>
              <h3>Дорого</h3>
              <img
                src={rhomb}
                className={styles.advantagesIcons}
              />
              <p>
                Наши мастера - профессионалы своего дела и не могут стоить
                дешево. К тому же, разве цена не дает определенный статус?
              </p>
            </li>
          </ul>
        </section>
        <div className={styles.wrapper}>
          <section className={styles.news}>
            <h2>Новости</h2>
            <ul>
              <li>
                <p>
                  Нам наконец-то завезли ягермайстер! Теперь вы можете
                  пропустить стаканчик во время стрижки
                </p>
                <time>11 января</time>
              </li>
            </ul>
            <ul>
              <li>
                <p>
                  В нашей команде пополнение, Борис "Бритва" Стригунец,
                  обладатель множества титулов и наград пополнил наши стройные
                  ряды
                </p>
                <time>18 января</time>
              </li>
            </ul>
            <NavLink
              className={styles.buttonAllNews}
              to="/news"
            >
              Все новости
            </NavLink>
          </section>
          <img src={line} />
          <section className={styles.gallary}>
            <h2>Фотогалерея</h2>
            <SimpleCarousel />
          </section>
        </div>
        <div className={styles.wrapper}>
          <section className={styles.informaton}>
            <h2>Контактная информация</h2>
            <p>
              Барбершоп "Бородинский"
              <br />
              Адрес: г.Санкт-Петербург, б.Конюшенная, д.19/8
              <br />
              Телефон: +7(495)666-02-66
            </p>
            <p>
              Время работы:
              <br />
              Пн-Пт: с 10:00 до 22:00
              <br />
              СБ-ВС: с 10:00 до 19:00
            </p>
            <div className={styles.wrapperButton}>
              <div className={styles.elementButton}>
                <ModalMap />
              </div>
              <div className={styles.elementButton}>
                <ModalEnroll />
              </div>
            </div>
          </section>
          <img src={line} />
          <section className={styles.inputEnroll}>
            <h3>Записаться</h3>
            <h4>
              Укажите желаемую дату и время и мы свяжемся
              <br /> с вами для подтверждения брони
            </h4>
            <InputEnroll />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
