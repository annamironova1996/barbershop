import { useState } from "react";
import { Dialog } from "@headlessui/react";
import styles from "./ModalRegister.module.css";
import InputRegister from "../Inputs/InputRegister";

const ModalRegister = () => {
  const [modalIsOpenRegister, setModalIsOpenRegister] = useState(false);

  const openModalRegister = () => {
    setModalIsOpenRegister(true);
  };

  const closeModalRegister = () => {
    setModalIsOpenRegister(false);
  };
  return (
    <div className={styles.modalRegister}>
      <button
        className="button"
        onClick={openModalRegister}
      >
        Войти
      </button>

      <Dialog
        open={modalIsOpenRegister}
        onClose={closeModalRegister}
        className="modalBackground"
      >
        <div className={styles.bg}>
          <Dialog.Panel className="modalPopup">
            <div>
              <InputRegister />
            </div>
            <button
              className="modalClose"
              onClick={closeModalRegister}
            ></button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default ModalRegister;
