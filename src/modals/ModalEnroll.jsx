import { useState } from "react";
import { Dialog } from "@headlessui/react";
import InputEnroll from "../Inputs/InputEnroll";
import styles from "./ModalEnroll.module.css";

const ModalEnroll = () => {
  const [modalIsOpenEnroll, setModalIsOpenEnroll] = useState(false);

  const openModalEnroll = () => {
    setModalIsOpenEnroll(true);
  };

  const closeModalEnroll = () => {
    setModalIsOpenEnroll(false);
  };

  return (
    <div className={styles.modalEnroll}>
      <button
        onClick={openModalEnroll}
        className="button"
      >
        Записаться
      </button>

      <Dialog
        open={modalIsOpenEnroll}
        onClose={closeModalEnroll}
        className="modalBackground"
      >
        <div>
          <Dialog.Panel className="modalPopup">
            <div>
              <h2 className="modalTitle">Записаться</h2>
              <h3 className="modalSubtitle">
                Укажите желаемую дату и время и мы свяжемся
                <br /> с вами для подтверждения брони
              </h3>
              <div className="modalInput">
                <InputEnroll />
              </div>
            </div>
            <button
              className="modalClose"
              onClick={closeModalEnroll}
            ></button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default ModalEnroll;
