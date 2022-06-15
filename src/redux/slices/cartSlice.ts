import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Rootsate } from '../store'

export type PizzasType = {
  name: string
  id: string
  imageUrl: string
  type: string
  price: number
  size: number
  count: number
}

interface CartSliceType {
  total: number
  pizzas: PizzasType[]
}

const initialState: CartSliceType = {
  pizzas: [],
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza: (state, action: PayloadAction<PizzasType>) => {
      const findPizza = state.pizzas.find(
        (pizza) => pizza.id === action.payload.id
      )
      if (findPizza) {
        findPizza.count++
      } else {
        state.pizzas.push({ ...action.payload, count: 1 })
      }

      state.total = state.pizzas.reduce((sum, pizza) => {
        return pizza.price * pizza.count + sum
      }, 0)
    },
    removePizza: (state, action: PayloadAction<string>) => {
      state.pizzas = state.pizzas.filter((pizza) => pizza.id !== action.payload)
    },
    minusPizza: (state, action: PayloadAction<string>) => {
      const findPizza = state.pizzas.find(
        (pizza) => pizza.id === action.payload
      )
      if (findPizza) {
        findPizza.count--
      }
    },
    clearPizzas: (state) => {
      state.pizzas = []
      state.total = 0
    },
  },
})

const { actions, reducer } = cartSlice

export const selectCart = (state: Rootsate) => state.cartSlice
export const selectCartPizzaById = (id: string) => (state: Rootsate) =>
  state.cartSlice.pizzas.find((pizza) => pizza.id === id)

export const { addPizza, removePizza, minusPizza, clearPizzas } = actions
export default reducer
