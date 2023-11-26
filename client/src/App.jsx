import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import { setContext } from "@apollo/client/link/context";
import Navbar from './components/Navbar';


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client}>
      <>
          <Navbar />
          <Outlet />

        </>
    </ApolloProvider>
  );
}

export default App;
