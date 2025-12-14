import { Analytics } from '@vercel/analytics/react';
import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          
          {/* Google Verification */}
          <meta
            name="google-site-verification"
            content="l-tszwk_PSNrXrPwYvaRZJ1ZItYl1XsfLrw5fCmPKO4"
          />
          
          {/* Apple & Mobile Icons */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          
          {/* PWA Metadata */}
          <meta name="msapplication-TileColor" content="#1a9def" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          
          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          
          {/* Default SEO Description */}
          <meta name="description" content="Mohd Anees - Front-End Developer with 10+ years of experience in React, HTML5, CSS3, and modern web development." />
          
          {/* Additional SEO Meta Tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="format-detection" content="telephone=no" />
          
          {/* Sitemap and RSS Links */}
          <link rel="sitemap" href="/sitemap.xml" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
        </body>
      </Html>
    );
  }
}

export default MyDocument;
