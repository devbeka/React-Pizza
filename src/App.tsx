import { Route, Routes } from 'react-router'
import Error404 from './components/Error404'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import AboutPizza from './pages/AboutPizza'
import './assets/scss/app.scss'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<AboutPizza />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
