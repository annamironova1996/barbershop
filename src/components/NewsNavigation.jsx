import { Tab } from "@headlessui/react";
import ModalRegister from "../modals/ModalRegister";
import styles from "./NewsNavigation.module.css";
import Card_1 from "../cards/Card_1";
import Card_2 from "../cards/Card_2";
import Card_3 from "../cards/Card_3";

const NewsNavigation = () => {
  return (
    <div className={styles.menuNews}>
      <Tab.Group>
        <ul className={styles.cardNews}>
          <Tab.Panels>
            <Tab.Panel>
              <Card_3 />
            </Tab.Panel>
            <Tab.Panel>
              <Card_2 />
            </Tab.Panel>
            <Tab.Panel>
              <Card_1 />
            </Tab.Panel>
            <Tab.Panel>
              <Card_1 />
              <Card_2 />
              <Card_3 />
            </Tab.Panel>
            <Tab.Panel>
              <Card_1 />
            </Tab.Panel>
            <Tab.Panel>
              <Card_2 />
            </Tab.Panel>
            <Tab.Panel>
              <Card_3 />
            </Tab.Panel>
            <Tab.Panel></Tab.Panel>
          </Tab.Panels>
        </ul>
        <ul className={styles.navNews}>
          <Tab.List>
            <h3>Категории</h3>
            <li>
              <Tab>Акции</Tab>
            </li>
            <li>
              <Tab>Вам будет интересно</Tab>
            </li>
            <li>
              <Tab>Уход за бородой</Tab>
            </li>

            <li>
              <Tab>Все категории</Tab>
            </li>
            <h3>Архив</h3>
            <li>
              <Tab>Июль 2016</Tab>
            </li>
            <li>
              <Tab>Июнь 2016</Tab>
            </li>
            <li>
              <Tab>Май 2016</Tab>
            </li>
            <li>
              <Tab>Апрель 2016</Tab>
            </li>
            <h3>Мета</h3>
            <li>
              <Tab>
                <ModalRegister />
              </Tab>
            </li>
            <li>
              <Tab>Новости RSS</Tab>
            </li>
            <li>
              <Tab>Комментарии RSS</Tab>
            </li>
          </Tab.List>
        </ul>
      </Tab.Group>
    </div>
  );
};

export default NewsNavigation;
