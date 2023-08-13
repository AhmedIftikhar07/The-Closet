import React, { useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { BsCartDashFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';
import { AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';


const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {

  const ref = useRef()
  const toggleCart = () => {
    if (ref.current.classList.contains('absolute')) {
      ref.current.classList.remove('absolute')
      ref.current.classList.add('hidden')
    }
    else if (!ref.current.classList.contains('absolute')) {
      ref.current.classList.remove('hidden')
      ref.current.classList.add('absolute')
    }
  }
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center shadow-md sticky top-0 bg-white z-50'>
      <div className="logo mx-5">
        <Link href={'/'}><Image src="/logo.png" alt="" width={170} height={40} /></Link>
      </div>
      <div className="nav">
        <ul className='flex  space-x-3 my-3'>
          <Link href={'/tshirts'}><li className='hover:text-red-500'>T-Shirts</li></Link>
          <Link href={'/pents'}><li className='hover:text-red-500'>Pents</li></Link>
          <Link href={'/hodies'}><li className='hover:text-red-500'>Hodies</li></Link>
          <Link href={'/mugs'}><li className='hover:text-red-500'>Mugs</li></Link>
        </ul>
      </div>
      <div className="flex cart absolute right-0 md:mx-5 mx-2 cursor-pointer top-5 ">
        <Link href={'/login'}><MdAccountCircle className='text-2xl md:text-4xl mx-1' /></Link>
        <BsCartDashFill onClick={toggleCart} className='text-xl md:text-3xl' />
      </div>


      <div ref={ref} className="md:w-72 w-screen h-screen sideCart hidden top-0 right-0 shadow-md bg-red-100 px-6 py-10">
        <h2 className=' text-center font-bold text-xl my-3'>Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-4 right-3 text-2xl cursor-pointer text-red-500"><AiFillCloseCircle /></span>
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length == 0 && <div className='my-4 font-normal'>No items present in the Cart</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className="item flex my-5">
                <div className='w-2/3 font-semibold items-center justify-center flex'>{cart[k].name}</div>
                <div className='w-1/3 font-semibold items-center justify-center flex text-red'><AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].variant, cart[k].size) }} className='text-red-400 cursor-pointer text-lg' /><span className='mx-2'>{cart[k].qty}</span><AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].variant, cart[k].size) }} className='text-red-400 cursor-pointer text-lg' />
                </div>
              </div>
            </li>
          })}

          <span className="total font-bold">Total: {subTotal} Rs</span>
        </ol>
        <Link href={'/checkout'}><button className='  mt-16  text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-sm'>Checkout</button></Link>
        <button onClick={clearCart} className=' mx-3 mt-16  text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-sm'>Clear Cart</button>
      </div>

    </div>
  )



}

export default Navbar
