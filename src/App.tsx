import React, { useState, useCallback } from 'react';

// styles
import styles from './App.module.css';

// components
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// interfaces
import { ITask } from './interfaces/Task'

function App() {

  const [taskList, SetTaskList] = useState<ITask[]>([])
 
  const deleteTask = useCallback((id: number) => {
    SetTaskList(taskList.filter((item) => item.id !== id))
  }, [taskList])

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.h2}>O que deve ser feito hoje?</h2>
        <TaskForm  SetTaskList={SetTaskList} taskList={taskList} btnText='Criar Tarefa' />
        <h2 className={styles.h2}>Suas Tarefas</h2>
        <TaskList deleteTask={deleteTask} taskList={taskList} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
