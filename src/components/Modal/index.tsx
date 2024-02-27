import { createPortal } from "react-dom";
import cls from "./index.module.scss";

interface Popup {
  active: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ active, onClose, children }: Popup) => {
  const modalElement = document.getElementById("modal") || document.body;

  return createPortal(
    <div
      className={active ? `${cls.modal} ${cls.active}` : `${cls.modal}`}
      onClick={onClose}
    >
      <div className={cls.content} onClick={(evt) => evt.stopPropagation()}>
        {children}
      </div>
    </div>,
    modalElement
  );
};
