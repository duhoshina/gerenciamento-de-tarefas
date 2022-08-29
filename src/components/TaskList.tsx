// interfaces
import {ITask} from '../interfaces/Task'

import styles from './TaskList.module.css'

interface Props {
  taskList: ITask[];

  // passar funcao por props
  deleteTask: (indice: number) => void;
}

const TaskList = ({taskList, deleteTask}: Props) => {

  return (
    <div>
      <ul>
          {taskList.map((item) => (
            <li className={styles.tasklist}>
              <div className={styles.container_btn}>
                <h3>{item.title}</h3>
                <p>Dificuldade: {item.difficulty}</p>
              </div>
              <div className={styles.container_btn}>
                <button>Editar</button>
                <button onClick={() => deleteTask(item.id)} className={styles.btn_delete}>Excluir</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default TaskList