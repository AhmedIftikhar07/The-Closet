import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [cart, setCart]= useState({})
  const [subTotal, setSubTotal]= useState(0)
  useEffect(()=>{
    console.log('UseEffect from App');
    try {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem('cart')))
      }
      
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
    
  },[])

  const saveCart = (myCart)=>{
    localStorage.setItem('cart',JSON.stringify(myCart))
    let subT = 0;
    let keys = Object.keys(myCart)
    for(let i=0; i<keys.length; i++){
      subT += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subT)
  }



  const addToCart = (itemCode, qty, price, name, size, variant)=>{
    let newCart = cart
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else{
      newCart[itemCode] = {qty: 1 ,price, name, size, variant}
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant)=>{
    let newCart = JSON.parse(JSON.stringify(cart))
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if(newCart[itemCode]['qty']<=0){
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }


  const clearCart =()=>{
    setCart({})
    saveCart({})
    console.log('Cart has been cleared');
  }
  return(
    <>
    <Head>
    <link rel="icon" href="/favicon-32x32.png" />
    </Head>

    <Navbar  cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}></Navbar>
     <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
     <Footer></Footer>
    </>
)}
