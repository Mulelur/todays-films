import React from 'react';
import { Helmet } from 'react-helmet';

import Routes from './routes/Routes';
import './App.scss';

function App() {
  return (
    <>
      <Helmet titleTemplate="%s - Today's films" defaultTitle="Today's films">
        <meta charSet="utf8" />
        <link href="http://localhost" rel="canonical" />
      </Helmet>
      <Routes />
    </>
  );
}

export default App;
