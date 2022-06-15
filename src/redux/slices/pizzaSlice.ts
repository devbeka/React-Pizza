import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Rootsate } from '../store'


export const fetchPizzas = createAsyncThunk<PizzaType[], Record<string, string>>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { sortBy, order, activeCategory, search } = params
    const response = await axios.get<PizzaType[]>(
      `https://628ceaf83df57e983ed8a66a.mockapi.io/pizzas?${activeCategory}&sortBy=${sortBy}&order=${order}${search}`
    )
    return response.data
  }
)

type PizzaType = {
  name: string
  id: string
  imageUrl: string
  price: number
  types: number[]
  sizes: number[]
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

interface PizzaSliceType {
  pizzas: PizzaType[]
  status: Status
}

const initialState: PizzaSliceType = {
  pizzas: [],
  status: Status.LOADING,
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzas: (state, action: PayloadAction<PizzaType[]>) => {
      state.pizzas = action.payload
    },
  },
    extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status =  Status.LOADING
      state.pizzas = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
      state.status =  Status.SUCCESS
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status =  Status.ERROR
      state.pizzas = [];
    });
  },
})

const { reducer, actions } = pizzaSlice

export const selectPizzaData = (state: Rootsate) => state.pizzaSlice

export const { setPizzas } = actions
export default reducer
