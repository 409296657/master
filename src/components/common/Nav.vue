<!--
  导航栏组件
  logoUrl : 导航Logo路径
  loginUrl : 登录图标路径
  loginList : 登录图标下拉菜单，后期需换成动态数据
-->
<template>
  <div id="commonNav">
    <div class="logo">
      <img :src="logoUrl">
      <div class="logo-text"><span style="font-size:3rem;">猿计划</span></div>
    </div>

    <el-menu router :default-active="defaultActive" active-text-color="red" mode="horizontal" >
      <el-menu-item  index="/">首页</el-menu-item>
      <el-menu-item  index="/knowledgeStruct">知识体系</el-menu-item>
      <el-menu-item  index="/topic">话题</el-menu-item>
      <el-menu-item  index="/acticle">文章</el-menu-item>
      <el-menu-item  index="/subject">题目</el-menu-item>
    </el-menu>
    <div class="login">
      <div class="writeArticle"><router-link to="/">看文章</router-link></div>
      <el-dropdown>
        <a><div class="login-img"><img :src="loginUrl"></div></a>
        <el-dropdown-menu slot="dropdown">
          <template v-for="(item,index) in loginList">
            <el-dropdown-item :index="index" :key="index">
              <router-link :to="item.to">{{item.name}}</router-link>
            </el-dropdown-item>
          </template>
      </el-dropdown-menu>
      </el-dropdown>

    </div>
  </div>
</template>

<script>

export default {
  name: 'commonNav',
  data: () => {
    return {
      logoUrl: './static/images/logo.jpg',
      loginUrl: './static/images/data@2x.png',
      loginList: [
        {
          name: '登录',
          to: '/login'
        },
        {
          name: '注册',
          to: '/Register'
        }
      ]
    }
  },
  props: ['defaultActive'],
  methods: {}
}
</script>

<style lang="scss">
  a:visited,a:hover,a:active,a{
    text-decoration: none;
    color: gray;
  }
  #commonNav{
    width: 1000px;
    height: 80px;
    margin: 0 auto;
    display: table;
    & .el-menu ,  & .el-menu--horizontal{
      border-bottom: none;
      display: inline-block;
      margin-top: 10px;
    }
    & .el-menu .el-menu-item{
      border-bottom: none;
      font-size: 1.2rem;
    }
    & .logo {
      display: inline-block;
      float: left;
      & img{
        float: left;
        display: inline-block;
        width: 60px;
        margin-top: 10px;
      }
      & .logo-text {
        display: inline-block;
        height: 80px;
        line-height: 80px;
      }
    }
    & .login{
      display: inline-block;
      float: right;
      & .writeArticle{
        display: inline-block;
        font-size: 1.2rem;
        height: 80px;
        line-height: 80px;
      }
      & .login-img{
        background-color: #C6C6C6;
        border-radius:30%;
        height:1.5rem;
        width:1.5rem;
        float: right;
        & img{
          height:1.5rem;
          width:1.5rem;
          border-radius:30%;
        }
      }
    }
  }
</style>
