import { Disclosure } from "@headlessui/react";
import jster from "../imag/jag-ter.jpg";
import styles from "./Cards.module.css";

const Card_2 = () => {
  return (
    <section className={styles.cards}>
      <img src={jster} />
      <h2>Мы наконец завезли ягермейстер</h2>
      <p>27.06.2016</p>

      <Disclosure>
        <ul>
          <li>
            <Disclosure.Button>Подробнее</Disclosure.Button>
          </li>
          <li className={styles.hiddenText}>
            <Disclosure.Panel>
              <p>
                НАМ НАКОНЕЦ ЗАВЕЗЛИ ЯГЕРМЕЙСТЕР! ТЕПЕРЬ ВЫ МОЖЕТЕ ПРОПУСТИТЬ
                СТАКАНЧИК ВО ВРЕМЯ СТРИЖКИ.
              </p>
            </Disclosure.Panel>
          </li>
        </ul>
      </Disclosure>
    </section>
  );
};

export default Card_2;
