import Vue from 'vue'
import Router from 'vue-router'
import KnowledgeStruct from '@/page/knowledgeStruct/knowledgeStruct'
import KnowledgeCard from '@/page/knowledgeStruct/knowledgeCard'
import MainPage from '@/page/mainPage/mainPage'
import Article from '@/page/article/article'
import Subject from '@/page/subject/subject'
import Topic from '@/page/topic/topic'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPage
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
      path: '/articles',
      name: 'articles',
      component: Article
    },{
      path: '/subject',
      name: 'subject',
      component: Subject
    },{
      path: '/topic',
      name: 'topic',
      component: Topic
    }
  ]
})
