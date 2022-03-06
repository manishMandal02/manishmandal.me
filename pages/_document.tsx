import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          {/* <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin /> */}
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,600&display=swap'
            rel='stylesheet'
          />
          {/* Google Analytics */}
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `,
            }}
          /> */}
          <Script
            id='veonr'
            dangerouslySetInnerHTML={{
              __html: `(function () {window._veoping = [];window.VEOPING_ID = "NTb1EepgyS";d = document;s = d.createElement("script");s.src = "https://api.app.veonr.com/api/pingpong.js";s.async = 1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
            }}
          />
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
