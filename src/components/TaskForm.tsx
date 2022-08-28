import React, {useState, ChangeEvent, FormEvent} from 'react'

// css
import styles from './TaskForm.module.css'

// interfaces
import {ITask} from '../interfaces/Task'

// interface que recebe a props
interface Props {
  btnText: string;
  taskList: ITask[];
  SetTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, SetTaskList }: Props) => {

  // states que batem com o ITask
  const [id, SetId] = useState<number>(0)
  const [title, SetTitle] = useState<string>("")
  const [difficulty, SetDifficulty] = useState<number>(0)

  const addTaskHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const id = Math.floor(Math.random() * 1000)
    const newTask: ITask = {id, title, difficulty}

    SetTaskList!([...taskList, newTask])

    SetTitle('');
    SetDifficulty(0);

    console.log(taskList)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch(event.target.name) {
      case 'title':
        SetTitle(event.target.value)
      break
      case 'difficulty':
        SetDifficulty(parseInt(event.target.value))
      break
    }

  }

  return (
    <form className={styles.form} onSubmit={addTaskHandler} >
      <div className={styles.input_container}>
        <label htmlFor="title">Título</label>
        <input type="text" name="title"  onChange={handleChange} value={title} placeholder="Ex: Terminar de ver as videos aulas de TS" />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade</label>
        <input type="text" name="difficulty" onChange={handleChange}  value={difficulty} placeholder="Dificuldade da Tarefa" />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm