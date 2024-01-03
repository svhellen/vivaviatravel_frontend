
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import 'bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import Script from 'next/script'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Layout>
      {/* <Navbar /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
      </Layout>
      <Script strategy='lazyOnload' 
      id="stripe-js" src={`bootstrap/dist/js/bootstrap.bundle.js`}/>
    </>
  );
}
