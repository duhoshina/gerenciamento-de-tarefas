import React from 'react'

interface Props {
  btnText: string
}

const TaskForm = ({ btnText }: Props) => {
  return (
    <form>
      <div>
        <label htmlFor="title">Título</label>
        <input type="text" name="title" placeholder="Ex: Terminar de ver as videos aulas de TS" />
      </div>
      <div>
        <label htmlFor="dificuldade">Dificuldade</label>
        <input type="text" name="dificuldade" placeholder="Dificuldade da Tarefa" />
      </div>
      <div>
        <input type="submit" value={btnText} />
      </div>
    </form>
  )
}

export default TaskForm