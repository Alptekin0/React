import './App.css'
import './index.css'
import Container from './Componenets/Container'; /* CONTAİNER COMPONENT */
import Navbar from "./Componenets/Navbar"; /* NAVBAR COMPONENT*/
import KitapVeri from './Componenets/KitapVeri'; /* KİTAP VERİ ÇEKME COMPONENT'İ*/
import { useState } from 'react';


function App() {


  const [bookFullData, setBookFullData] = useState([]);



  return (
    <>

      <Navbar />
      <KitapVeri data={setBookFullData} />

      {bookFullData.map((book, index) => (
        <Container key={index} book={book} />
      ))}

    </>
  )
}

export default App
