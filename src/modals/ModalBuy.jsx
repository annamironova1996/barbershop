import { useState } from "react";
import { Dialog } from "@headlessui/react";
import styles from "./ModalBuy.module.css";
import InputBuy from "../Inputs/InputBuy";

const ModalBuy = () => {
  const [modalIsOpenBuy, setModalIsOpenBuy] = useState(false);

  const openModalBuy = () => {
    setModalIsOpenBuy(true);
  };

  const closeModalBuy = () => {
    setModalIsOpenBuy(false);
  };

  return (
    <div className={styles.modalBuy}>
      <button
        onClick={openModalBuy}
        className="button"
      >
        Купить
      </button>

      <Dialog
        open={modalIsOpenBuy}
        onClose={closeModalBuy}
        className="modalBackground"
      >
        <div>
          <Dialog.Panel className="modalPopup">
            <div>
              <h2 className="modalTitle">Форма заказа</h2>
              <h3 className="modalSubtitle">
                Заполните форму и мы свяжемся
                <br /> с вами для подтверждения заявки
              </h3>
              <div className="modalInput">
                <InputBuy />
              </div>
            </div>
            <button
              className="modalClose"
              onClick={closeModalBuy}
            ></button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default ModalBuy;
