import { Card } from "../Card/index.tsx";
import "./data.tsx";
import { Task } from "./data.tsx";
import cls from "./index.module.scss";

export interface ListToDoProps {
  toDoList: Task[];
  deleteToDo: (task: Task) => void;
  toggleCompleteToDo: (task: Task["id"]) => void;
  editToDo: (task: Task) => void;
}

export const ListToDo = ({
  toDoList,
  deleteToDo,
  toggleCompleteToDo,
  editToDo,
}: ListToDoProps) => {
  if (!toDoList.length)
    return (
      <div className={cls.empty}>
        <img className={cls.image} src="public/Clipboard.png" alt="empty" />
        <div className={cls.title}>
          <p>Список задач пуст</p>
          <p>Добавьте новую задачу!</p>
        </div>
      </div>
    );

  return (
    <div className={cls.listToDo}>
      {toDoList.map((card) => (
        <Card
          key={card.id}
          card={card}
          deleteToDo={deleteToDo}
          toggleCompleteToDo={toggleCompleteToDo}
          editToDo={editToDo}
        />
      ))}
    </div>
  );
};
