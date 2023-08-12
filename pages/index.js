import Head from 'next/head'

import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>The Closet</title>
        <meta name="description" content="the closet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>


      <div  className=''>
        <img src="/banner.jpg" alt=""/>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Discover Your Signature Style</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">At The Closet, we invite you to experience a realm where fashion meets passion, and style knows no bounds. Unveil a world of elegance, sophistication, and trendsetting designs that resonate with your unique personality. </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4 hover:shadow-md">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2"> Elevate Your Wardrobe</h2>
                <p className="leading-relaxed text-base">Revamp your style with exquisite pieces that speak to your unique taste. Explore a curated collection that redefines elegance and fashion.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 hover:shadow-md">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Unleash Your Confidence</h2>
                <p className="leading-relaxed text-base">Discover clothing that empowers you to step into the spotlight with confidence. Elevate your look and make a statement that's authentically you.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 hover:shadow-md">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">The Art of Accessorizing</h2>
                <p className="leading-relaxed text-base">Complete your ensemble with carefully selected accessories that add the perfect finishing touch. Elevate your outfit effortlessly.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 hover:shadow-md">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2"> Modern Flair
                </h2>
                <p className="leading-relaxed text-base">Experience a blend of classic designs and modern twists that capture the essence of timeless fashion trends.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 hover:shadow-md">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Curated Lifestyle Essentials</h2>
                <p className="leading-relaxed text-base">From apparel to accessories, explore a thoughtfully curated range that complements your lifestyle and adds a touch of sophistication</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 hover:shadow-md">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2"> Your Fashion Journey Begins</h2>
                <p className="leading-relaxed text-base">Embark on a transformative style journey with The Closet. Unveil new possibilities, redefine your look, and make fashion a canvas of self-expression.</p>
              </div>
            </div>
          </div>

        </div>
      </section>


    </>
  )
}
