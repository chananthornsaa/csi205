import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './layouts/Layout/Layout'

import Home from './pages/Home/Home'
import Todos from './pages/Todo/Todo'
import Calculator from './pages/Calculator/Calculator'
import Component from './pages/Component/Component'
import Animation from './pages/Animation/Animation'
import Products from './pages/Products/Products'
import Carts from './pages/Carts/Carts'
import Login from './pages/Login/Login'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import { fetchProducts } from './data/products'

import './App.css'

// HashRouter, BrowserRouter, MemoryRouter

const intTab = 'home'

function App() {
  const [token, setToken] = useState('')
  const [role, setRole] = useState('')

  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  const [tab, setTab] = useState('')

  useEffect(() => setProducts(fetchProducts()), [])

  useEffect(() => console.log(products), [products])

  useEffect(() => {
    setTab(intTab)
  }, []) // first load

  if (token === '') {
    return (<Login setToken={setToken} setRole={setRole} />)
  } else {
    return (
      <div className='app-container'>
        <BrowserRouter basename='/csi205/' >
          <Routes>
            <Route element={<Layout products={products} carts={carts} setToken={setToken} />}>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/todo' element={<Todos />} />
              <Route path='/calculator' element={<Calculator />} />
              <Route path='/component' element={<Component />} />
              <Route path='/animation' element={<Animation />} />
              <Route path='/products' element={<Products products={products} carts={carts} setCarts={setCarts} />} />
              <Route path='/carts' element={<Carts carts={carts} setCarts={setCarts} />} />
              <Route path='/login' element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
