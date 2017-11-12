import Vue from 'vue'
import Router from 'vue-router'
const Recommend = resolve => require(['../components/recommend/recommend.vue'], resolve) 
const Singer = resolve => require(['../components/singer/singer.vue'], resolve) 
const Rank = resolve => require(['../components/rank/rank.vue'], resolve) 
const Search = resolve => require(['../components/search/search.vue'], resolve) 
const SingerDetail = resolve => require(['../components/singer-detail/singer-detail.vue'], resolve) 


Vue.use(Router)


const routes = [
   {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
]



export default new Router({
   routes
})

