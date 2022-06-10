import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import cart from '../../assets/img/cart.svg'
import CartItem from '../../components/CartItem'
import { clearPizzas, selectCart } from '../../redux/slices/cartSlice'
import CartEmpty from '../../components/CartEmpty'
import arrowLeft from '../../assets/img/arrow-left.svg'
import clear from '../../assets/img/trash-icon.svg'

const Cart = () => {
  const dispatch = useDispatch()
  const { total, pizzas } = useSelector(selectCart)
  const count = pizzas.reduce((sum, pizza) => sum + pizza.count, 0)

  const onClickClear = () => {
    dispatch(clearPizzas())
  }

  if (!total) {
    return <CartEmpty />
  }

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <img src={cart} alt="cart icon" />
            Корзина
          </h2>
          <button className="cart__clear">
            <img src={clear} alt="clear" />
            <span onClick={onClickClear}>Очистить корзину</span>
          </button>
        </div>
        <div className="content__items">
          {pizzas.map((pizza) => (
            <CartItem key={pizza.id} {...pizza} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b>{count} шт.</b>
            </span>
            <span>
              Сумма заказа: <b>{total} ₽</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn">
              <img src={arrowLeft} alt="back" />
              <span>Вернуться назад</span>
            </Link>
            <button className="button pay-btn">
              <span>Оплатить сейчас</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
