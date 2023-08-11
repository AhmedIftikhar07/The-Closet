import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return(
    <>
    <Head>
    <link rel="icon" href="/favicon-32x32.png" />
    </Head>

    <Navbar></Navbar>
     <Component {...pageProps} />
     <Footer></Footer>
    </>
)}
