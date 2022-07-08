import { FC, useState } from 'react'
import './styles.scss'

type typeProps = {
  active: boolean
  setActive: any
}

const Modal: FC<typeProps> = ({ active, setActive }) => {


  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)} >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <form className="modal__form">
          <label>Ваше имя:</label>
          <input required placeholder="Alex" type="text" />
          <label>Ваш номер:</label>
          <input required placeholder="+996 (111) 123 456" type="text" />
          <label>Ваш email:</label>
          <input placeholder="alex.pushkin@gmail.com (не обязательно)"  type="email" />
          <label>Ваш адрес:</label>
          <input required placeholder="ул. Пушкина19 / кв.44" type="text" />
          <label>Прочее:</label>
          <input required placeholder="подъезд-2, этаж-8 и тд." type="text" />

          <label> Способ оплаты:</label>
          <select>
            <option value="cash">наличными</option>
            <option value="visa">картой</option>
          </select>

          <div>
            <button>Оформить</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
