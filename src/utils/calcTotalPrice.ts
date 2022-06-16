import { PizzasType } from '../store/slices/cartSlice'

export const calcTotalPrice = (pizzas: PizzasType[]) => {
  return pizzas.reduce((sum, pizza) => pizza.price * pizza.count + sum, 0)
}
