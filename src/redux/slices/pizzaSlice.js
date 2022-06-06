import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { sortBy, order, activeCategory, search } = params
    const response = await axios.get(
      `https://628ceaf83df57e983ed8a66a.mockapi.io/pizzas?${activeCategory}&sortBy=${sortBy}&order=${order}${search}`
    )
    return response.data
  }
)

const initialState = {
  pizzas: [],
  status: 'loading'
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzas: (state, action) => {
      state.pizzas = action.payload
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.pizzas = action.payload
      state.status = 'success'
    },
    [fetchPizzas.rejected]: (state) => {
      state.pizzas = 'error'
      state.status = []
    },
  },
})

const { reducer, actions } = pizzaSlice

export const { setPizzas } = actions
export default reducer
