import Vue from 'vue'
import Router from 'vue-router'
import KnowledgeStruct from '@/page/knowledgeStruct/knowledgeStruct'
import KnowledgeCard from '@/page/knowledgeStruct/knowledgeCard'
import MainPage from '@/page/mainPage/mainPage'
import Article from '@/page/article/article'
import Subject from '@/page/subject/subject'
import Topic from '@/page/topic/topic'
import News from '@/page/topic/news'
import Register from '@/page/login/register'
import UserInfo from '@/page/user/userInfo'
import MyCollection from '@/page/user/mycollection'
import User from '@/page/user/user'
import MyNote from '@/page/user/mynote'
import MyTask from '@/page/user/mytask'
import ResetPwd from '@/page/user/resetpwd'
import MyMessage from '@/page/user/mymessage'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPage
    },{
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
    },
    {
      path: '/topic',
      name: 'topic',
      component: Topic,
    },{
      path: '/topic/node:nodeid',
      name: '',
      component: Topic
    },{
      path: '/topic/page:pagenum',
      name: '',
      component: Topic
    },
    {
      path: '/topic/node:nodeid/page:pagenum',
      name: '',
      component: Topic
    },{
      path: '/topic/:id',
      name: '',
      component: News
    },{
      path: '/register',
      name: 'register',
      component: Register
    },{
      path: '/user',
      name: '',
      component: User,
      children:[
        {
          path: 'userinfo',
          name: 'userinfo',
          component: UserInfo
        },{
          path: 'mycollection',
          name: 'mycollection',
          component: MyCollection
        },{
          path: 'mynote',
          name: 'mynote',
          component: MyNote
        },
        {
          path: 'mytask',
          name: 'mytask',
          component: MyTask
        },
        {
          path: 'resetpwd',
          name: 'resetpwd',
          component: ResetPwd
        },
        {
          path: 'mymessage',
          name: 'mymessage',
          component: MyMessage
        },
      ]
    },
  ]
})
