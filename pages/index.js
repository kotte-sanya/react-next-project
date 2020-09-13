import Head from 'next/head'
import Link from 'next/link'
import Layout from '../src/components/Layout/layout'

const pageTitle = "Triton Home"
const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="page-wrapper p-5">
        <h1>Triton Home</h1>
        <Link href="/login" ><a>Login</a></Link>
        <br/>
        <Link href="/updatePassword" ><a>Update Password</a></Link>
      </div>
    </Layout>
  )
}

export default Home
