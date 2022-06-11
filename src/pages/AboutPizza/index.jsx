import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import './styles.scss'
import { Link } from 'react-router-dom'

const AboutPizza = ({ active, setActive }) => {
  const [pizza, setPizza] = useState()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function getPizza() {
      try {
        const { data } = await axios.get(
          `https://628ceaf83df57e983ed8a66a.mockapi.io/pizzas/${id}`
        )
        setPizza(data)
      } catch (error) {
        navigate('/')
      }
    }
    getPizza()
  }, [])

  return (
      <div className="container">
        {!pizza ? (
          <div>Загрузка...</div>
        ) : (
          <div className="pizza">
            <div>
              <img src={pizza.imageUrl} alt="image pizza" />
            </div>
            <div className="pizza__info">
              <h2>{pizza.name}</h2>
              <p>{pizza.description}</p>
              <h4>Цена: {pizza.price} ₽</h4>
            </div>
          </div>
        )}
        <Link className="toHome" to="/">
          <span>Назад</span>
        </Link>
      </div>
  )
}

export default AboutPizza
