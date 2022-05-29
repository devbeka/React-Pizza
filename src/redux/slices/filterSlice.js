import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
    changeSort: (state, action) => {
      state.sort = action.payload
    },
  },
})

const { actions, reducer } = filterSlice

export const { changeCategory, changeSort } = actions
export default reducer
