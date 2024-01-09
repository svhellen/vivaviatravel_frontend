// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body style={{ overflow: 'scroll' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
