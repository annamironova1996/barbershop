import { Link } from "react-router-dom";
import goods from "../data/goods";
import styles from "./Goods.module.css";
import ModalBuy from "../modals/ModalBuy";

const Goods = () => {
  return (
    <article className={styles.wrapperGoods}>
      {goods.map((product) => (
        <div className={styles.goods}>
          <img src={product.img} />
          <h2>{product.title}</h2>
          <h3>{product.lable}</h3>

          <Link
            className={styles.goodsNav}
            to={product.slug}
            key={product.id}
          >
            Подробнее
          </Link>
          <div className={styles.wrapperPriceAndButton}>
            <div className={styles.price}>{product.price}</div>
            <ModalBuy />
          </div>
        </div>
      ))}
    </article>
  );
};

export default Goods;
