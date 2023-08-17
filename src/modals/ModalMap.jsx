import { useState } from "react";
import { Dialog } from "@headlessui/react";
import styles from "./ModalMap.module.css";

const ModalMap = () => {
  const [modalIsOpenMap, setModalIsOpenMap] = useState(false);

  const openModalMap = () => {
    setModalIsOpenMap(true);
  };

  const closeModalMap = () => {
    setModalIsOpenMap(false);
  };

  return (
    <div className={styles.modalMap}>
      <button
        onClick={openModalMap}
        className="button"
      >
        Как проехать
      </button>

      <Dialog
        open={modalIsOpenMap}
        onClose={closeModalMap}
        className={styles.dialog}
      >
        <div className="modalBackground">
          <Dialog.Panel className="mapPopup">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A031822084352dfa6cf2795341f4461cfc2093b2d5a9f0bc206e19491682d43fa&amp;source=constructor"
              width="766"
              height="560"
              frameborder="0"
            ></iframe>
            <button
              class="mapClose"
              onClick={closeModalMap}
            ></button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default ModalMap;
