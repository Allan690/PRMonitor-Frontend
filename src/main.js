import Vue from 'vue';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import router from "vue-router";
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache
});

Vue.use(VueApollo);


const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  apolloProvider
}).$mount('#app');
