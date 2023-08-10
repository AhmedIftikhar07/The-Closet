import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { BsCartDashFill } from 'react-icons/bs';
const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center shadow-md sticky top-0 bg-white z-50'>
      <div className="logo mx-5">
        <Link href={'/'}><Image src="/logo.png" alt="" width={170} height={40} /></Link>
      </div>
      <div className="nav">
        <ul className='flex  space-x-3 my-3'>
          <Link href={'/tshirts'}><li className='hover:text-indigo-600'>T-Shirts</li></Link>
          <Link href={'/pents'}><li className='hover:text-indigo-600'>Pents</li></Link>
          <Link href={'/hodies'}><li className='hover:text-indigo-600'>Hodies</li></Link>
          <Link href={'/mugs'}><li className='hover:text-indigo-600'>Mugs</li></Link>
        </ul>
      </div>
      <div className="cart absolute md:text-3xl right-0 mx-5 top-5 text-lg text-indigo-600">
        <BsCartDashFill />
      </div>

    </div>
  )



}

export default Navbar
