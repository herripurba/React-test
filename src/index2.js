import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache,gql } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
  uri: 'https://wpe-hiring.tokopedia.net/graphql/',
  cache: new InMemoryCache(),
});

// const client = ...

client
  .query({
    query: gql`
      query GetContactList {
        contact {
          id
          first_name
          last_name
        }
      }
    `,
  })
  .then((result) => console.log(result));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
