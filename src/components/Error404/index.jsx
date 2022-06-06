import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

const Error404 = () => {
  return (
    <div className={styles.root}>
      <h1>
        Error 404 😕 <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожелению данная страница отсуствует в нашем интернет-магазине
      </p>
       <Link to='/' className={styles.toHome}>
       <span>Перейти на главную страницу</span>
       </Link>
    </div>
  )
}

export default Error404
