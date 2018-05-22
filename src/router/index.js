import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/page/mainPage/lightbrother/mainPage'
import Login from '@/page/login/yyl/login'
import Register from '@/page/login/yyl/register'
import KnowledgeStruct from '@/page/knowledgeStruct/ob/knowledgeStruct'
import KnowledgeCard from '@/page/knowledgeStruct/ob/knowledgeCard'
import Topic from '@/page/topic/jack/Topic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/knowledgeStruct',
      name: 'knowledgeStruct',
      component: KnowledgeStruct
    },{
      path: '/knowledgeCard',
      name: 'knowledgeCard',
      component: KnowledgeCard
    },{
      path: '/topic',
      name: 'topic',
      component: Topic
    }
  ]
})
