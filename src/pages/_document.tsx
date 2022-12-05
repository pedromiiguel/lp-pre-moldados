import Document, { Html, Head, Main, NextScript } from 'next/document';

import Analytics from '../components/Analytics';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <Analytics />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="favicon.png" />
          <link rel="apple-touch-icon" href="favicon.png" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="MP Pré Moldados" />
          <meta
            property="og:description"
            content="A MP PRÉ-MOLDADOS foi criada e fundada em 2012 com intuito de suprir a
          demanda de materiais Pré-moldados para diversas regiões de Brasília."
          />
          <meta
            property="og:image"
            content="https://mppremoldados.com/banner_section_about.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:locale" content="pt_BR" />
          <link rel="canonical" href="https://mppremoldados.com/" />
          <meta
            name="keywords"
            content="Mp Pré moldados, canaletas, blocos de concreto, muros pré moldados, canaleta baldrame, pre moldados brasilia"
          />
        </Head>
        <body>
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXXDTQT"></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
