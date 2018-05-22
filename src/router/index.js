import Vue from 'vue'
import Router from 'vue-router'
import KnowledgeStruct from '@/page/knowledgeStruct/knowledgeStruct'
import KnowledgeCard from '@/page/knowledgeStruct/knowledgeCard'
import MainPage from '@/page/mainPage/mainPage'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPage
    },
    {
      path: '/123',
      name: 'knowledgeStruct',
      component: KnowledgeStruct
    },{
      path: '/knowledgeCard',
      name: 'knowledgeCard',
      component: KnowledgeCard
    }
  ]
})
