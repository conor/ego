import React from 'react'

import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />

          <style media='screen'>{`body{width:100%;overflow-x:hidden;margin:0;font-family:Avenir Next,sans-serif;font-weight:400;font-size:1rem;color:#153431;line-height:1.5;}h1,h2,h3,h4,h5,h6{line-height:1.25;}`}</style>

          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/static/favicons/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/static/favicons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/static/favicons/favicon-16x16.png'
          />
          <link rel='manifest' href='/static/favicons/manifest.json' />
          <link
            rel='mask-icon'
            href='/static/favicons/safari-pinned-tab.svg'
            color='#e34235'
          />
          <meta name='theme-color' content='#ffffff' />

          <title>Conor Wade – Developer, Designer, Explorer</title>

          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/aos/2.1.1/aos.css'
          />

        </Head>
        <body className='custom_class'>
          {this.props.customValue}
          <Main />
          <NextScript />
          <script src='https://cdnjs.cloudflare.com/ajax/libs/aos/2.1.1/aos.js' />
          <script>
            AOS.init()
          </script>
        </body>
      </html>
    )
  }
}
