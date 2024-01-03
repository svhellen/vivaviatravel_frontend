import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      {/* <Script strategy='lazyOnload' 
      id="stripe-js" src={`bootstrap/dist/js/bootstrap.bundle.min.js`}/> */}
    </Html>
  )
}
