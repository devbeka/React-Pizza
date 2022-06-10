import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchPizza: '',
  category: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload
    },
    setSearchPizza: (state, action) => {
      state.searchPizza = action.payload
    },
    changeSort: (state, action) => {
      state.sort = action.payload
    },
  },
})

const { actions, reducer } = filterSlice

export const selectSort = (store) => store.filterSlice.sort
export const selectFilter = (store) => store.filterSlice

export const { changeCategory, changeSort, setSearchPizza } = actions
export default reducer
