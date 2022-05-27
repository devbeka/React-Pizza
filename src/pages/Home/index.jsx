import React, { useState, useEffect } from 'react'
import Categories from '../../components/Categories'
import Sort from '../../components//Sort'
import PizzaBlock from '../../components//Pizza/PizzaBlock'
import Skeleton from '../../components//Pizza/PizzaBlock/skeleton'
import Pagination from '../../components/Pagination'

const Home = ({ searchValue }) => {
  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [activeCategory, setActiveCategory] = useState(0)
  const [activeSort, setActiveSort] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  })

  useEffect(() => {
    setIsLoading(true)

    const sortBy = activeSort.sortProperty.replace('-', '')
    const order = activeSort.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = activeCategory > 0 ? `category=${activeCategory}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    fetch(
      `https://628ceaf83df57e983ed8a66a.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((response) => response.json())
      .then((jsonPizzas) => {
        setPizzas(jsonPizzas)
        setIsLoading(false)
      })
  }, [activeCategory, activeSort, searchValue])

  const items = pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          onChangeCategory={(i) => setActiveCategory(i)}
        />
        <Sort activeSort={activeSort} onChangeSort={(i) => setActiveSort(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : items}</div>
      <Pagination />
    </div>
  )
}

export default Home
