import { Button } from "../Button";
import { Task } from "../ListToDo/data";
import { Modal } from "../Modal";

import cls from "./index.module.scss";

interface ModalModeProps {
  isOpen: boolean;
  taskToDelete: Task | null;
  onClose: () => void;
  onAprove: () => void;
}

export const ModalMode = ({
  isOpen,
  taskToDelete,
  onClose,
  onAprove,
}: ModalModeProps) => {
  return (
    <Modal active={isOpen} onClose={onClose}>
      <span className={cls.popupTitle}>
        {`Вы точно хотите удалить текущую задачу: ${
          taskToDelete?.task ? `"${taskToDelete?.task}"` : " "
        }?`}
      </span>
      <div className={cls.popupBtn}>
        <Button
          className={`${cls.buttonPopup}  ${cls.buttonRed}`}
          onClick={onAprove}
        >
          <span>Да!</span>
        </Button>
        <Button
          className={`${cls.buttonPopup} ${cls.buttonBlue}`}
          onClick={onClose}
        >
          <span>Отмена</span>
        </Button>
      </div>
    </Modal>
  );
};
