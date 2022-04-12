import '../styles/globals.css'
import Script from 'next/script'
import type { AppProps } from 'next/app'

import Layout from './components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-58440TT5Z7`}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-58440TT5Z7', { page_path: window.location.pathname });
            `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
