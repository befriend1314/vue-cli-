import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import ListContainer from '../components/ListContainer.vue'
import NewsDetail from '../components/NewsDetail.vue'
import Theme from '../components/Theme.vue'
import ThemeList from '../components/ThemeList.vue'
import About from '../components/About.vue'
Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  routes: [
    { path: '/', name: 'home', component: ListContainer },
    { path: '/news/:id', name:'news', component: NewsDetail },
    { path: '/theme', name:'theme', component: Theme },
    { path: '/themelist/:id', name:'themelist', component: ThemeList },
    { path: '/about', name:'about', component: About }
  ]
})