import React from 'react'

const Categories = ({activeCategory, onChangeCategory}) => {

  const cotegories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

  return (
    <div>
      <div className="categories">
        <ul>
          {cotegories.map((cotegory, i) => (
            <li
              key={cotegory}
              onClick={() =>  onChangeCategory(i)}
              className={activeCategory === i ? 'active' : ''}>
              {cotegory}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Categories
