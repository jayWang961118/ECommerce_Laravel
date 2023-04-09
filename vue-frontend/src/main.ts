import { createApp, provide, h  } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import i18n from './i18n'
import VueFeather from 'vue-feather'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://laravel-backend.test/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

import { DefaultApolloClient } from '@vue/apollo-composable'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp({
    setup () {
      provide(DefaultApolloClient, apolloClient)
    },
  
    render: () => h(App),
  })

app.use(createPinia())
app.use(router)
app.use(i18n)
app.component(VueFeather.name, VueFeather)
app.mount('#app')
