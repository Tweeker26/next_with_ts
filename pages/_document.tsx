import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export const siteTitle = 'Unsplash Profile with Nextjs';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
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

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
