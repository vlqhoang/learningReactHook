import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import GithubStateContextProvider from "./context/github/GithubStateContextProvider";
import AlertStateContextProvider from "./context/alert/AlertStateContextProvider";

ReactDOM.render(
  <React.StrictMode>
      <GithubStateContextProvider>
          <AlertStateContextProvider>
              <App/>
          </AlertStateContextProvider>
      </GithubStateContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
