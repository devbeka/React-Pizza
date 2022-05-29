import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../../components/Categories'
import Sort from '../../components//Sort'
import PizzaBlock from '../../components//Pizza/PizzaBlock'
import Skeleton from '../../components//Pizza/PizzaBlock/skeleton'
import Pagination from '../../components/Pagination'
import { SearchContext } from '../../App'
import { changeCategory } from '../../redux/slices/filterSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { category, sort } = useSelector((state) => state.filterSlice)
  const sortType = sort.sortProperty

  const onChangeCategory = (i) => {
    dispatch(changeCategory(i))
  }

  const { searchValue } = useContext(SearchContext)
  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    const sortBy = sortType.replace('-', '')
    const order = sortType.includes('-') ? 'asc' : 'desc'
    const activeCategory = category > 0 ? `category=${category}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    fetch(
      `https://628ceaf83df57e983ed8a66a.mockapi.io/pizzas?${activeCategory}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((response) => response.json())
      .then((jsonPizzas) => {
        setPizzas(jsonPizzas)
        setIsLoading(false)
      })
  }, [category, sortType, searchValue])

  const items = pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : items}</div>
      <Pagination />
    </div>
  )
}

export default Home
