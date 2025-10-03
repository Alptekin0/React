import '../still.css'
import { IoHomeOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { useState } from 'react';
import CartTable from './CartTable';
import { useNavigate } from 'react-router-dom';


function Navbar({ cart }) {

     const navigate = useNavigate();

     const [isCartOpen, setIsCartOpen] = useState(false);

     const cartOpen = () => {
          setIsCartOpen(!isCartOpen);
     }



     return (
          <div className='navbar-container'>
               <div className='navbar-title'>
                    <p onClick={() => navigate("/")}>ALIS.IO</p>
               </div>
               <div className='icons'>
                    <IoHomeOutline className='home' onClick={() => navigate("/")} />
                    <BsCart className='cart' onClick={cartOpen} />
                    {isCartOpen && (
                         <CartTable cart={cart} />
                    )}

               </div>
          </div>
     )
}

export default Navbar