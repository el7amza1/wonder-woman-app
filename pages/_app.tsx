import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import "../styles/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
  <Component {...pageProps} />
  </Layout>)
}

export default MyApp
