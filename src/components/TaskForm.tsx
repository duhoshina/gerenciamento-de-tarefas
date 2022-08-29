import React, {useState, ChangeEvent, FormEvent} from 'react'

// css
import styles from './TaskForm.module.css'

// interfaces
import {ITask} from '../interfaces/Task'

// interface que recebe a props
interface Props {
  btnText: string;
  taskList: ITask[];

  // passar um state como props
  SetTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, SetTaskList }: Props) => {

  // objetos ITask (Item Task)
  const [id, SetId] = useState<number>(0)
  const [title, SetTitle] = useState<string>("")
  const [difficulty, SetDifficulty] = useState<string>("")

  const addTaskHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const id = Math.floor(Math.random() * 1000)
    const newTask: ITask = {id, title, difficulty}

    // ! indicacao que obrigatoriamente vai receber uma nova task
    SetTaskList!([...taskList, newTask])

    SetTitle('');

    console.log(taskList)
    console.log(newTask)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    SetTitle(event.target.value)
  }

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    SetDifficulty(event.target.value)
  }

  return (
    <form className={styles.form} onSubmit={addTaskHandler} >
      <div className={styles.input_container}>
        <label htmlFor="title">Título</label>
        <input type="text" name="title"  onChange={handleChange} value={title} placeholder="Ex: Terminar de ver as videos aulas de TS" />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Grau da Tarefa</label>
        <select name="difficulty" onChange={handleSelect} required>
          <option value="" selected>Selecione um grau</option>
          <option value="importante">Importante</option>
          <option value="urgente">Urgente</option>
        </select>
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm