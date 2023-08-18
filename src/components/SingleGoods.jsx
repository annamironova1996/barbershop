import { Link, useNavigate, useParams } from "react-router-dom";
import goods from "../data/goods";
import { useEffect } from "react";
import ModalBuy from "../modals/ModalBuy";
import blackRhomb from "../imag/blackRhomb.svg";
import styles from "./SingleGoods.module.css";

const SingleGoods = () => {
  const params = useParams();
  const navigate = useNavigate();
  const product = goods.find((product) => product.slug === params.slug);

  useEffect(() => {
    if (!product) {
      navigate("..", { relative: "path" });
    }
  }, [product, navigate]);
  return (
    <section className={styles.singleGoods}>
      <div className="container">
        <h2 className="hiddenElement">Описание товара</h2>

        <h3>
          {product?.title} {product?.lable}
        </h3>

        <ul className={styles.singleGoodsNav}>
          <li>
            <Link
              to="../.."
              relative="path"
              className="backLink"
            >
              Главная
            </Link>
          </li>
          <img src={blackRhomb} />
          <li>
            <Link
              to=".."
              relative="path"
              className="backLink"
            >
              Магазин
            </Link>
          </li>
          <img src={blackRhomb} />
          <li>
            <Link
              to="."
              relative="path"
              className="link"
            >
              {product.title}
              {product.lable}
            </Link>
          </li>
        </ul>
        <div className={styles.containerImgDescription}>
          <div className={styles.wrapperImg}>
            <img
              className={styles.maxImg}
              src={product.img}
            />
            <div className={styles.minImg}>
              {product.min_imag.map((items) => (
                <ul>
                  <li>
                    <img src={items.imag} />
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className={styles.wrapperDescription}>
            <div className={styles.wrapperStatusArticle}>
              <p>{product.status}</p>
              <p className={styles.article}>{product.article}</p>
            </div>
            <p>{product.description}</p>
            <div className={styles.wrapperPriceAndButton}>
              <div className={styles.price}>{product.price}</div>
              <ModalBuy />
            </div>
            <p className={styles.titleAdditionally}>{product.additionally}</p>
            <div>
              {product.additionally_item.map((items) => (
                <ul className={styles.wrapperAdditionally}>
                  <li>
                    <img src={blackRhomb} />
                  </li>
                  <li>{items.item}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleGoods;
