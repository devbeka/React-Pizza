import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Rootsate } from '..'

type SortType = {
  name: string
  sortProperty: 'rating' | 'price' | 'name' | '-rating' | '-price' | '-name'
}

type FilterSliceType = {
  searchPizza: string
  category: number
  sort: SortType
}

const initialState: FilterSliceType = {
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
    changeCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload
    },
    setSearchPizza: (state, action: PayloadAction<string>) => {
      state.searchPizza = action.payload
    },
    changeSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload
    },
  },
})

const { actions, reducer } = filterSlice

export const selectSort = (store: Rootsate) => store.filterSlice.sort
export const selectFilter = (store: Rootsate) => store.filterSlice

export const { changeCategory, changeSort, setSearchPizza } = actions
export default reducer
