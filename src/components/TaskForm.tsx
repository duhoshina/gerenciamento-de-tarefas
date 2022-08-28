import React from 'react'

import styles from './TaskForm.module.css'

interface Props {
  btnText: string
}

const TaskForm = ({ btnText }: Props) => {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título</label>
        <input type="text" name="title" placeholder="Ex: Terminar de ver as videos aulas de TS" />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="dificuldade">Dificuldade</label>
        <input type="text" name="dificuldade" placeholder="Dificuldade da Tarefa" />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm