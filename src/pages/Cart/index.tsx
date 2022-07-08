import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../../components/CartItem'
import { clearPizzas, selectCart } from '../../store/slices/cartSlice'
import CartEmpty from '../../components/CartEmpty'
import arrowLeft from '../../assets/img/arrow-left.svg'
import clear from '../../assets/img/trash-icon.svg'
import cart from '../../assets/img/cart.svg'
import './styles.scss'
import Modal from '../../components/Modal'

const Cart: FC = () => {
  const dispatch = useDispatch()
  const { total, pizzas } = useSelector(selectCart)
  const count = pizzas.reduce((sum: number, pizza: any) => sum + pizza.count, 0)

  const [modalActive, setModalActive] = useState(false)

  

  const onClickClear = () => {
    dispatch(clearPizzas())
  }

  if (!total) {
    return <CartEmpty />
  }

  return (
    <>
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
          {pizzas.map((pizza: any) => (
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
              <img src={arrowLeft} alt="back"/>
              <span>Вернуться назад</span>
            </Link>
            <button onClick={() => setModalActive(true)} className="button pay-btn">
              <span>Оформить заказа</span>
            </button>
            <Modal active={modalActive} setActive={setModalActive}/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart
