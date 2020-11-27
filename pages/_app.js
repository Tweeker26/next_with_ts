import React from 'react';
import Head from 'next/head';
import { siteTitle } from './_document';

import 'antd/dist/antd.min.css';
import 'styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{siteTitle}</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
