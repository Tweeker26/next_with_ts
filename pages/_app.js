import React from 'react';
import Head from 'next/head';

import 'antd/dist/antd.min.css';
import 'styles/globals.css';

export const siteTitle = 'Unsplash Profile with Nextjs';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{siteTitle}</title>

        <meta name="application-name" content="Using Next.js with Unsplash API" />
        <meta name="description" content={siteTitle} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />

        <link rel="icon" sizes="16x16" href="/icons/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteTitle} />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
