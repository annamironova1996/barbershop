import { Link } from "react-router-dom";
import styles from "./News.module.css";
import blackRhomb from "../imag/blackRhomb.svg";
import NewsNavigation from "./NewsNavigation";
const News = () => {
  return (
    <div className={styles.news}>
      <div className="container">
        <h2>Новости</h2>
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
          <img src={blackRhomb} />
          <li>
            <Link
              path="."
              relative="path"
              className="link"
            >
              Новости
            </Link>
          </li>
        </ul>
        <section>
          <NewsNavigation />
        </section>
      </div>
    </div>
  );
};

export default News;
