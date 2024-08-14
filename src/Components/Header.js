import React, { useState } from 'react'
import { BsBag } from "react-icons/bs";
import Order from './Order';

const showOrders = (props) =>{
    return <div>
       {props.orders.map(i => (<Order key={i.id} item ={i}/>))}
    </div>
}

const showNothing = () => {
  return <div className='empty'>
    <h2>No product</h2>
  </div>
}

export default function Header(props) {

  let [cartOpen,setCartOpen] = useState(false);

  return (
    <header>
        <div>
            <span className='logo'>Zolotorev</span>
            <ul className='nav'>
              <li>About us</li>
              <li>Contacts</li>
              <li>Office</li>
            </ul>
            <BsBag onClick={() => setCartOpen(cartOpen = !cartOpen) } className={`shop-cart-button ${cartOpen && 'active'}`}/>

            {cartOpen && 
            (
              <div className='shop-cart'> 

                {props.orders.length > 0 ? showOrders(props) : showNothing()}
              
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
