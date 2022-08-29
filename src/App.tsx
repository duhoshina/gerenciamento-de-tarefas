import React, { useState, useCallback } from 'react';

// styles
import styles from './App.module.css';

// components
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal'

// interfaces
import { ITask } from './interfaces/Task'

function App() {

  const [taskList, SetTaskList] = useState<ITask[]>([])
  const [showModal, SetShowModal] = useState<boolean>(false)
 
  const deleteTask = useCallback((id: number) => {
    SetTaskList(taskList.filter((item) => item.id !== id))
  }, [taskList])

  const closeModal = () => {
    if(showModal){
      SetShowModal(false)
    } 
  }

  return (
    <div>
      <Header />
      <main onClick={closeModal} className={styles.main}>
        <h2 className={styles.h2}>O que deve ser feito hoje?</h2>
        <TaskForm  SetTaskList={SetTaskList} taskList={taskList} btnText='Criar Tarefa' />
        <h2 className={styles.h2}>Suas Tarefas</h2>
        <TaskList deleteTask={deleteTask}  SetShowModal={SetShowModal} taskList={taskList} />
      </main>
      {showModal && <Modal SetShowModal={SetShowModal} taskList={taskList} />}
      <Footer />
    </div>
  );
}

export default App;
