import React from 'react';
import logo from './logo.svg';
import { Helmet } from 'react-helmet';
// import { useStoreRehydrated } from 'easy-peasy';
import Routes from './routes/Routes';
import './App.scss';

function App() {
  // const isRehydrated = useStoreRehydrated();

  return (
    <>
      <Helmet titleTemplate="%s - Today's films" defaultTitle="Today's films">
        <meta charSet="utf-8" />
        <link href="http://localhost" rel="canonical" />
      </Helmet>
      <Routes />
      {/* {!isRehydrated && <>Loading...</>} */}
    </>
  );
}

export default App;
