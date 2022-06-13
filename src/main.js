// Imports
import { createApp, h } from 'vue';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { createApolloProvider } from '@vue/apollo-option';
import { createMetaManager } from "vue-meta";
import { plugin as vueMetaPlugin } from 'vue-meta'

import App from '@/App.vue';
import { router } from '@/router';

// Cache implementation
const cache = new InMemoryCache();

// Create the Apollo client
const apolloClient = new ApolloClient({
  cache,
  uri: import.meta.env.VITE_GRAPHQL_API_URL,
});

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

// Create the app
const app = createApp({
  render: () => h(App),
});

// Use Apollo, the router and the meta manager
app.use(apolloProvider);
app.use(router);
app.use(createMetaManager());
app.use(vueMetaPlugin);

// Mount the app
app.mount('#app');
