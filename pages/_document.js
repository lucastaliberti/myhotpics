import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='en'>
        <Head>
          <link rel='apple-touch-icon' href='/static/apple-touch-icon.png' />
          <link rel='icon' href='/static/favicon.ico' />
          <link rel='mask-icon' sizes='any' href='/static/mask-icon.svg' color='#00d6ff' />
          <meta charSet='utf-8' />
          <meta name='keywords' content='melkat, melanie, kat, link, blog, bookmarks' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta property='og:type' content='website' />
          <meta name='twitter:image' content='/static/facebook-open-graph.png' />
          <meta name='twitter:image:alt' content='logo for melkat.dev' />
          <meta property='og:image' content='/static/facebook-open-graph.png' />
          <meta property='og:image:height' content='630' />
          <meta property='og:image:width' content='1200' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
