import { useState } from "react";
import { Logo } from "./components/Logo";
import { SearchBlock } from "./components/SearchBlock";
import { ListToDo } from "./components/ListToDo";
import { Task, data } from "./components/ListToDo/data";
import { Wrapper } from "./components/Wrapper";
import { Counter } from "./components/Counter";
import { ModalMode } from "./components/ModalMode";

import cls from "./App.module.scss";

function App() {
  const [toDoList, setToDoList] = useState<Task[]>(data);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentTaskToDelete, setCurrentTaskToDelete] = useState<Task | null>(
    null
  );

  const addToDo = (task: Task) => {
    const newToDoList = [...toDoList, task];

    setToDoList(newToDoList);
  };

  const onAproveDeleteToDo = () => {
    if (!currentTaskToDelete) return;

    const filteredToDoList = toDoList.filter(
      (todo) => todo.id !== currentTaskToDelete?.id
    );

    setToDoList(filteredToDoList);
    console.log("delete");

    setIsModalOpen(false);
    setTimeout(() => setCurrentTaskToDelete(null), 1000);
  };

  const deleteToDo = (todo: Task) => {
    setIsModalOpen(true);
    setCurrentTaskToDelete(todo);
  };

  const toggleCompleteToDo = (id: Task["id"]) => {
    const mappedToDo = toDoList.map((el) =>
      el.id === id ? { ...el, complete: !el.complete } : el
    );

    setToDoList(mappedToDo);
  };

  const editToDo = (task: Task) => {
    const newToDoList = [...toDoList];

    const currentToDo = toDoList.findIndex((todo) => todo.id === task.id);
    newToDoList[currentToDo] = task;

    setToDoList(newToDoList);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <div className={cls.main}>
        <Logo />
        <SearchBlock addToDo={addToDo} />
        <Counter toDoList={toDoList} />
        <ListToDo
          toDoList={toDoList}
          deleteToDo={deleteToDo}
          toggleCompleteToDo={toggleCompleteToDo}
          editToDo={editToDo}
        />
      </div>
      <ModalMode
        isOpen={isModalOpen}
        taskToDelete={currentTaskToDelete}
        onClose={handleCloseModal}
        onAprove={onAproveDeleteToDo}
      />
    </Wrapper>
  );
}
export default App;
