import Head from 'next/head'
import styles from './layout.module.css'
import {Image} from 'react-bootstrap'

export const siteTitle = 'Triton'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.logo}><Image src="/assets/images/logo.png"/></div>
      <main >{children}</main>
    </div>
  )
}