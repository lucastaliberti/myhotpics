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
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
          <link rel='icon' href='/favicon.ico' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' sizes='any' href='/mask-icon.svg' color='#ff2900' />
          <meta charSet='utf-8' />
          <meta name='keywords' content='melkat, melanie, kat, link, blog, bookmarks' />
          <meta name='theme-color' content='#000000' />
          <meta name='twitter:image' content='/cover.png' />
          <meta name='twitter:image:alt' content='logo for melkat.dev' />
          <meta property='og:image' content='/cover.png' />
          <meta property='og:image:height' content='630' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:type' content='website' />
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
