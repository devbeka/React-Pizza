import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

const Error404: FC = () => {
  return (
    <div className={styles.root}>
      <h1>Error 404 😕</h1>
      <p>К сожелению эта страница недоступна.</p>
      <Link to="/" className={styles.toHome}>
        <span>Перейти на главную страницу</span>
      </Link>
    </div>
  )
}

export default Error404
