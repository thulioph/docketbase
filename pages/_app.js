import React from 'react'
import Head from 'next/head'

import { AppDataProvider } from 'src/context/app'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>DocketBase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppDataProvider>
        <Component {...pageProps} />
      </AppDataProvider>
    </React.Fragment>
  )
}

export default MyApp
