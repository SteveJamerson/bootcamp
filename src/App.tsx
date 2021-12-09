import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Helmet } from "react-helmet";
import Routing from './pages/routes';
import ResetStyle from './styles/reset'
import GlobalStyle from './styles/global'
import './styles/theme.scss'

const App: React.FC = () => {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Helmet >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
      </Helmet>
      <Router>
        <Routing />
      </Router>
    </>
  );
}

export default App;
