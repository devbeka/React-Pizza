import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pizzas: [],
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza: (state, action) => {
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
    removePizza: (state, action) => {
      state.pizzas = state.pizzas.filter((pizza) => pizza.id !== action.payload)
    },
    minusPizza: (state, action) => {
      const findPizza = state.pizzas.find(
        (pizza) => pizza.id === action.payload.id
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

export const { addPizza, removePizza, minusPizza, clearPizzas } = actions
export default reducer
