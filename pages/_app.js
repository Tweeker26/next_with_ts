import React from 'react';
import Head from 'next/head';
import { siteTitle } from './_document';

import 'styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
