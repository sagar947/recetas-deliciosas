import { Provider } from 'react-redux'
import { useStore } from '../store'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { ReactReduxFirebaseProvider  } from 'react-redux-firebase'
import { createFirestoreInstance  } from 'redux-firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Header from './layouts/Header';

import '../styles.scss';

const firebaseConfig = {
  apiKey: "AIzaSyBFvAq16DwjfmtODYyiZ4kdHxuxqI-Rm0o",
  authDomain: "deleciosas-recetas-8e112.firebaseapp.com",
  databaseURL: "https://deleciosas-recetas-8e112.firebaseio.com",
  projectId: "deleciosas-recetas-8e112",
  storageBucket: "deleciosas-recetas-8e112.appspot.com",
  messagingSenderId: "844623798916",
  appId: "1:844623798916:web:8f8edb6d05589db461d8d1",
  measurementId: "G-6ZBPJ7B9BV"
};

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
firebase.firestore();

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  }

  const auth = firebase.auth()

  return (
    <React.StrictMode>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Head>
            <link rel="shortcut icon" href="/images/favicon.png"/>
          </Head>
          <Header auth={auth} />
          <div className="mt-100">
            <Component {...pageProps} />
          </div>
        </ReactReduxFirebaseProvider>
      </Provider>
    </React.StrictMode>
  )
}
