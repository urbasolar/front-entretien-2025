import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { updateToken } from '@utils/authentication';
import { config } from '@config/environnement';

const httpLink = createHttpLink({
  uri: config.GRAPHQL_URL,
})

const authLink = setContext(async (_, { headers }) => {
  const token = await updateToken()
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      nextFetchPolicy: 'cache-and-network',
      fetchPolicy: 'network-only',
    },
  },
})

export default client
