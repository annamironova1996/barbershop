import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <>
      <h2>Средства для ухода</h2>
      <ul>
        <li>
          <Link
            to=".."
            relative="path"
          >
            Главная
          </Link>
        </li>
        <li>
          <Link
            to="."
            relative="path"
          >
            Магазин
          </Link>
        </li>
      </ul>
      <section>
        <h2>Производители:</h2>
        <ul>
          <li>
            <Link>Baxter of California</Link>
          </li>
          <li>
            <Link>Mr Natty</Link>
          </li>
          <li>
            <Link>Suavecito</Link>
          </li>
          <li>
            <Link>Malin+Goetz</Link>
          </li>
          <li>
            <Link>Murray's</Link>
          </li>
          <li>
            <Link>American crew</Link>
          </li>
        </ul>
      </section>
      <section>
        <h2>Группы товаров</h2>
        <ul>
          <Link>Бритвенные принадлежности</Link>
          <Link>Средства для ухода</Link>
          <Link>Аксессуары</Link>
        </ul>
      </section>
      <button type="button">Показать</button>
      <article>
        <h2>Набор для путешествий "BAXTER OF CALIFORNIA"</h2>
        <img></img>
        <p>2900 р</p>
        <button type="button">Купить</button>
      </article>
      <article>
        <h2>Увлажняющий кондиционер "BAXTER OF CALIFORNIA"</h2>
        <img></img>
        <p>750 р</p>
        <button type="button">Купить</button>
      </article>
      <article>
        <h2>Гель для волос "SUAVECITO"</h2>
        <img></img>
        <p>290 р</p>
        <button type="button">Купить</button>
      </article>
      <article>
        <h2>Глина для укладк волос "AMERICAN CREW"</h2>
        <img></img>
        <p>500 р</p>
        <button type="button">Купить</button>
      </article>
      <article>
        <h2>Гель для волос "AMERICAN CREW"</h2>
        <img></img>
        <p>300 р</p>
        <button type="button">Купить</button>
      </article>
      <article>
        <h2>Набор для бритья "BAXTER OF CALIFORNIA"</h2>
        <img></img>
        <p>3900 р</p>
        <button type="button">Купить</button>
      </article>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">4</button>
    </>
  );
};

export default Shop;
