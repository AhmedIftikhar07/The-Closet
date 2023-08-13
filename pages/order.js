import React from 'react'

const Order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">The Closet</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id : 2938899</h1>
        <p className="leading-relaxed mb-4">Your order has been susseccfully placed</p>
        <div class="flex mb-4">
          <a class="flex-grow md:text-lg text-base px-1">Description</a>
          <a class="flex-grow md:text-lg text-base px-1">Color</a>
          <a class="flex-grow md:text-lg text-base px-1">Quantity</a>
          <a class="flex-grow md:text-lg text-base px-1">Price</a>
        </div>
        <div className='mb-12'>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Polo T-Shirt</span>
          <span className="ml-auto text-gray-900">Blue</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">499Rs</span>
        </div>
        <div className="flex border-t  border-gray-200 py-2">
          <span className="text-gray-500">Polo T-Shirt</span>
          <span className="ml-auto text-gray-900">Red</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">499Rs</span>
        </div>
        <div className="flex border-t  border-gray-200 py-2">
          <span className="text-gray-500">Polo T-Shirt</span>
          <span className="ml-auto text-gray-900">Grey</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">499Rs</span>
        </div>
        </div>
        
        <div className="flex md:flex-row flex-col">
          <span className="title-font font-medium text-2xl md:mb-0 mb-4 text-gray-900">Subtotal: 1490 Rs</span>
          <button class="md:flex md:ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Track Order</button>
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Order
