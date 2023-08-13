import React from 'react'
// import { BsCartDashFill } from 'react-icons/bs';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import Link from 'next/link';

const Checkout = ({cart,addToCart,removeFromCart,subTotal}) => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Checkout</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Streamlined Checkout: Your Journey from Cart to Doorstep Made Effortless.</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="md:flex flex-wrap -m-2">
            <div className="p-2 md:w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name <span className='text-red-500'>*</span></label>
                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 md:w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email <span className='text-red-500'>*</span></label>
                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 md:w-1/2">
              <div className="relative">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone <span className='text-red-500'>*</span></label>
                <input type="number" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 md:w-1/2">
              <div className="relative">
                <label htmlFor="city" className="leading-7 text-sm text-gray-600">City <span className='text-red-500'>*</span></label>
                <input type="text" id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 md:w-1/2">
              <div className="relative">
                <label htmlFor="state" className="leading-7 text-sm text-gray-600">State <span className='text-red-500'>*</span></label>
                <input type="text" id="state" name="state" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 md:w-1/2">
              <div className="relative">
                <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincodes <span className='text-red-500'>*</span></label>
                <input type="text" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="Address" className="leading-7 text-sm text-gray-600">Address <span className='text-red-500'>*</span></label>
                <textarea id="Address" name="Address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Submit</button>
            </div>
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mt-6 mb-4 text-gray-900">Review Card Items</h1>
            </div>


            <div className=" w-full sideCart top-0 right-0 shadow-md bg-red-100 px-6 py-10">
        <h2 className=' text-center font-bold text-xl my-3'>Shopping Cart</h2>
        
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length == 0 && <div className='my-4 font-normal'>No items present in the Cart</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className="item flex my-5">
                <div className='w-2/3 font-semibold items-center justify-start flex'>{cart[k].name}</div>
                <div className='w-1/3 font-semibold items-center justify-start flex text-red'><AiFillMinusCircle onClick={()=>{removeFromCart(k,1, cart[k].price, cart[k].name, cart[k].variant, cart[k].size)}} className='text-red-400 cursor-pointer text-lg' /><span className='mx-2'>{cart[k].qty}</span><AiFillPlusCircle onClick={()=>{addToCart(k,1, cart[k].price, cart[k].name, cart[k].variant, cart[k].size)}} className='text-red-400 cursor-pointer text-lg' />
                </div>
              </div>
            </li>
          })}
          <span className="total font-bold">Subtotal: {subTotal}Rs</span>
        </ol>
        <Link href={'/checkout'}><button className='  mt-16  text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-sm'>Pay {subTotal} Rs</button></Link>
      </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout
