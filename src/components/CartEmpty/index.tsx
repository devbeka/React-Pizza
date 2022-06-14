import { FC } from 'react'
import { Link } from 'react-router-dom'
import cartEmpty from '../../assets/img/empty-cart.png'
import './styles.scss'

const CartEmpty: FC = () => {
  return (
    <>
      <div className="empty">
        <h2>Корзина пустая <span>😕</span></h2>
        <p>
          Вероятней всего, вы ещё не добавляли пиццу в корзину.
          <br />
          Для того, чтобы добавить пиццу, перейди на главную страницу.
        </p>
        <img src={cartEmpty} alt="Empty cart"/>
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  )
}

export default CartEmpty
