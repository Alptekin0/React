import Navbar from './components/Navbar'
import './App.css'
import Container from './components/Container'
import { Route, Routes } from 'react-router-dom'
import DetayGoruntule from './DetayGoruntule'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { get } from './components/VeriCekSlice'

function App() {

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.veriCek);

  useEffect(() => {
    dispatch(get())
  }, [dispatch]);


  const [cart, setCart] = useState([]);

  const addToCart = (urun) => {
    setCart(prev => [...prev, urun]);
  };


  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route path='/' element={<Container product={products} />} />
        <Route path='/detay/:id' element={<DetayGoruntule product={products} addToCart={addToCart} />} />
      </Routes>


    </>
  )
}

export default App