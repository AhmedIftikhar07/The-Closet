import React from 'react'
import Link from 'next/link'
const Forgot = () => {
  return (
    <div>
    <section class="">
        <div class="flex flex-col items-center justify-center px-6 py-4 pt-28 mx-auto ">
         
          <div class="w-full rounded-lg  md:mt-0 sm:max-w-md xl:p-0 shadow-md bg-gray-50">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-3xl font-bold mb-10 text-center ">
               Forgot Password
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium">Email</label>
                  <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="name@company.com" required="" />
                </div>
               
                <button type="submit" class="w-full text-center  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Continue</button>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Forgot
