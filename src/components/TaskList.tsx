import React, { useState } from 'react'

// interfaces
import {ITask} from '../interfaces/Task'

import styles from './TaskList.module.css'

interface Props {
  taskList: ITask[];

  // passar funcao por props
  delTask: (indice: number) => void;
}

const TaskList = ({taskList, delTask}: Props) => {

  return (
    <div>
      <ul>
          {taskList.map((item, indice) => (
            <li className={styles.tasklist}>
              <div className={styles.container_btn}>
                <h3>{item.title}</h3>
                <p>Indice no Array: {indice}</p>
                <p>Dificuldade: {item.difficulty}</p>
              </div>
              <div className={styles.container_btn}>
                <button>Editar</button>
                <button onClick={() => delTask(item.id)} className={styles.btn_delete}>Excluir</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default TaskList