import React from 'react'

// interface
import { ITask } from '../interfaces/Task'

// css
import styles from './Modal.module.css'

interface Props {
  taskList: ITask[];
  SetShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({SetShowModal, taskList}: Props) => {
  return (
    <div className={styles.modal}>
      <form className={styles.form} >
        <label htmlFor="title">
          Editar tarefa
        </label>
        <input type="text" name='title' />
        <input type="submit" value='Editar'/>
      </form>
      <button onClick={() => SetShowModal(false)}>Fechar Modal</button>
    </div>
  )
}

export default Modal