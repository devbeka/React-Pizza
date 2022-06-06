import React, { createContext, useState } from 'react'
import { Route, Routes } from 'react-router'
import Error404 from './components/Error404'
import Header from './components/Header'
import Home from './pages/Home'

import Cart from './pages/Cart'
import './assets/scss/app.scss'

export const SearchContext = createContext('')

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  )
}

export default App
