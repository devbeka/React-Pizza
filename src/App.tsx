import { Route, Routes } from 'react-router'
import { lazy, Suspense } from 'react'
import Error404 from './components/Error404'
import Header from './components/Header'
import Home from './pages/Home'
import './assets/scss/app.scss'

const Cart = lazy(() => import('./pages/Cart'))
const AboutPizza = lazy(() => import('./pages/AboutPizza'))

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <Suspense
                fallback={<div className="load">Идёт загрузка корзины ...</div>}>
                <Cart />
              </Suspense>
            }/>
          <Route
            path="/pizza/:id"
            element={
              <Suspense
                fallback={<div className="load">Идёт загрузка пиццы ...</div>}>
                <AboutPizza />
              </Suspense>
            }/>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
