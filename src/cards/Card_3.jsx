import { Disclosure } from "@headlessui/react";
import man from "../imag/man.jpg";
import styles from "./Cards.module.css";

const Card_3 = () => {
  return (
    <section className={styles.cards}>
      <img src={man} />
      <h2>Акция этой недели "Приведи друга"</h2>
      <p>27.05.2016</p>

      <Disclosure>
        <ul>
          <li className={styles.hiddenText}>
            <Disclosure.Panel>
              <p>Приведи друга и получи скидку -15% на любую стрижку!</p>
            </Disclosure.Panel>
          </li>
          <li>
            <Disclosure.Button>Подробнее</Disclosure.Button>
          </li>
        </ul>
      </Disclosure>
    </section>
  );
};

export default Card_3;
