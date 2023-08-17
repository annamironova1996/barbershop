import ModalMap from "../modals/ModalMap";
import { SlSocialVkontakte } from "react-icons/sl";
import { ImFacebook, ImInstagram } from "react-icons/im";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <section>
        <h2 className="hiddenElement">Контакты</h2>
        <p>
          Барбершоп "Бородинский"
          <br />
          Адрес:г.Санкт-Петербург, ул. Б.Конюшенная, д.19/8
          <ModalMap />
          Телефон: +7(495)666-02-66
        </p>
      </section>
      <div className={styles.social}>
        <p>Давайте дружить</p>
        <ul>
          <li>
            <a href="https://vk.com/">
              <SlSocialVkontakte className={styles.socialIcon} />
            </a>
          </li>
          <li>
            <a href="https://facebook.com/">
              <ImFacebook className={styles.socialIcon} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <ImInstagram className={styles.socialIcon} />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>
          Разработано:
          <a href="#"></a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
