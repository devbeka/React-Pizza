import React, { useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../../components/Categories'
import Sort from '../../components//Sort'
import PizzaBlock from '../../components//Pizza/PizzaBlock'
import Skeleton from '../../components//Pizza/PizzaBlock/skeleton'
import { changeCategory, selectFilter } from '../../redux/slices/filterSlice'
import { fetchPizzas, selectPizzaData } from '../../redux/slices/pizzaSlice'

import './styles.scss'

const Home = () => {
  const dispatch = useDispatch()
  const { pizzas, status } = useSelector(selectPizzaData)
  const { category, sort, searchPizza } = useSelector(selectFilter)
  const sortType = sort.sortProperty

  const onChangeCategory = (i) => {
    dispatch(changeCategory(i))
  }

  const getPizzas = async () => {
    const sortBy = sortType.replace('-', '')
    const order = sortType.includes('-') ? 'asc' : 'desc'
    const activeCategory = category > 0 ? `category=${category}` : ''
    const search = searchPizza ? `&search=${searchPizza}` : ''

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        activeCategory,
        search,
      })
    )
  }

  useEffect(() => {
    getPizzas()
  }, [category, sortType, searchPizza])

  const pizzaList = pizzas.map((pizza) => (
    <PizzaBlock key={pizza.id} {...pizza} />
  ))
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onChangeCategory={onChangeCategory}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === 'loading' ? skeleton : pizzaList}
      </div>
    </div>
  )
}

export default Home
