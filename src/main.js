// Imports
import { createApp, h } from 'vue';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { createApolloProvider } from '@vue/apollo-option';

import App from '@/App.vue';
import { router } from '@/router';

// Cache implementation
const cache = new InMemoryCache();

// Create the Apollo client
const apolloClient = new ApolloClient({
  cache,
  uri: 'http://localhost:3001/api/graphql',
});

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

// Create the app
const app = createApp({
  render: () => h(App),
});

// Use Apollo and the router
app.use(apolloProvider);
app.use(router);

// Mount the app
app.mount('#app');
