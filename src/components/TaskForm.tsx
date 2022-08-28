import React, {useState, ChangeEvent, FormEvent} from 'react'

// css
import styles from './TaskForm.module.css'

// interfaces
import {ITask} from '../interfaces/Task'

interface Props {
  btnText: string
}

const TaskForm = ({ btnText }: Props) => {

  // states que batem com o ITask
  const [id, SetId] = useState<number>(0)
  const [title, SetTitle] = useState<string>("")
  const [difficulty, SetDifficulty] = useState<number>(0)

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

  const addTaskHandler = () => {

  } 

  return (
    <form className={styles.form} onSubmit={addTaskHandler} >
      <div className={styles.input_container}>
        <label htmlFor="title">Título</label>
        <input type="text" name="title"  onChange={handleChange} placeholder="Ex: Terminar de ver as videos aulas de TS" />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade</label>
        <input type="text" name="difficulty" onChange={handleChange} placeholder="Dificuldade da Tarefa" />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm