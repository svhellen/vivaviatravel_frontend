// pages/_app.js

import 'bootstrap-icons/font/bootstrap-icons.css';
import Layout from '@/components/Layout';
import '@/styles/globals.css'

import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // O pathname contém o caminho da URL da página atual
  const currentPage = router.pathname;
  let titulo = "VivaVia Travel";
  let useCustomNavbar = false;

  if (currentPage === "/") {
    titulo = "VivaVia Travel - Home";
    useCustomNavbar = true;
  }

  return (
    <>
      <Layout titulo={titulo} useCustomNavbar={useCustomNavbar}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
