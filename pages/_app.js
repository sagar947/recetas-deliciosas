import { Provider } from 'react-redux'
import { useStore } from '../store'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Header from './layouts/Header';

import '../styles.scss';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png"/>
      </Head>
      <Header />
      <div className="mt-100">
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}
