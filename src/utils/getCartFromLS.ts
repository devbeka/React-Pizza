import { calcTotalPrice } from './calcTotalPrice'

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart')
  const pizzas = data ? JSON.parse(data) : []
  const total = calcTotalPrice(pizzas)

  return {
    pizzas,
    total,
  }
}
