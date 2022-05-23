import React, { useState } from 'react'

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0)

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
              onClick={() =>  setActiveCategory(i)}
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
