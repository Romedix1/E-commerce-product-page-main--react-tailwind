import './App.css';
import Nav from './Components/Nav'
import Slider from './Components/Slider'
import Details from './Components/Details'

import React, { useState } from "react"

function App() {
  const [amount, setAmount] = useState(0)

  const [cartIdCounter, setCartIdCounter] = useState(1)
  const [cartItems, setCartItems] = useState([])
  

  function updateCart() {
    
      if (amount > 0)
      {
        const newItem = {
          id:  cartIdCounter,
          productThumbnail: "./images/image-product-1-thumbnail.jpg",
          productTitle: "Fall Limited Edition Sneakers",
          productPrice: "125.00",
          productAmount: amount,
        }

        setCartIdCounter(cartIdCounter+1)

        setCartItems(prevItems => [newItem, ...prevItems])
      }
}

function deleteItem(itemId) 
{
  setCartItems(oldItems => oldItems.filter(cartItem => cartItem.id !== itemId))
}


const cartItem = cartItems.map(item => {
  return (
      <article key={item.id} className='mb-8'>
          <div className='flex items-center my-5 mx-3'>
            <img src={item.productThumbnail}  className='w-12 rounded-md'/>

            <div className='ml-2'>
              <p className='cart--product-name   text-sm'>{item.productTitle}</p>

                <div>
                  <p className='cart--product-price   text-sm'>${item.productPrice} x {item.productAmount} 
                  <span className='cart--product-price-total   font-bold ml-3   text-sm'>${(item.productPrice * item.productAmount).toFixed(2)}</span></p>
                </div>
            </div>

            <img src='./images/icon-delete.svg' className=' absolute right-3.5 cursor-pointer' onClick={() => deleteItem(item.id)}/>
          </div>

      </article>
  )
})

  return (
    <>
      <Nav cartArray={cartItems} cartMappedArray={cartItem} />
      <div className='lg:flex lg:w-10/12 lg:mt-16'>
        <Slider />
        <Details amountValue={amount} changeAmount={setAmount}  cartValue={cartItems} updateCartValue={setCartItems} setCartItems={updateCart}/>
      </div>
    </>
  );
}

export default App;
