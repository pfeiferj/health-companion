import React from 'react';
import Layout from './Components/Layout';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import { ApolloProvider } from '@apollo/client';
import client from './client';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <div className="App">
            <Layout />
          </div>
        </ApolloProvider>
      </Provider>
    </Router>
  );
}

export default App;
