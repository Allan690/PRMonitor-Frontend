import Vue from 'vue';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import VueRouter from "vue-router";
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';
import BoardsComponent from "@/components/presentational/BoardsComponent";
import SprintStoriesComponent from "@/components/presentational/SprintStoriesComponent";

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
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/issues/:boardNo', name: 'sprintIssues', component: SprintStoriesComponent, props: true},
  { path: '/', name: 'allBoards', component: BoardsComponent }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  apolloProvider
}).$mount('#app');
