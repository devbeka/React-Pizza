import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import cartSlice from './slices/cartSlice'
import pizzaSlice from './slices/pizzaSlice'

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    pizzaSlice,
  },
})

export type Rootsate = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispacth = () => useDispatch<AppDispatch>()
