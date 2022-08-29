import styles from "./Footer.module.css"

const Footer = () => {

  const funcao = () => {
    const xd: number = 2
  }

  return (
    <footer className={styles.footer}>
      <p>
        Desenvolvido por <span>Luis Eduardo Hoshina</span> @ 2022
      </p>  
    </footer>
  )
}

export default Footer