<template lang="html">
  <div class="head">
      <img src="../../images/yuanjihua.jpg">
      <div class="navbar">
        <ul>
          <li v-for='(list,index) in lists' :class="{active:index==isActive}" >
            <router-link :to="{name:list.name}"><b>{{list.text}}</b></router-link>
          </li>
        </ul>
        <div class="user" v-if="!land">
          <el-dropdown>
            <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>{{userId}}
            </span>
            <el-dropdown-menu slot="dropdown">
              <div class="userinfo"><router-link :to="{ name: 'userinfo'}">用户信息</router-link></div>
              <div class="userinfo"><router-link :to="{ name: 'resetpwd'}">修改密码</router-link></div>
              <div class="userinfo"><router-link :to="{ name: 'mynote'}">我的帖子</router-link></div>
              <div class="userinfo"><router-link :to="{ name: 'mycollection'}">我的收藏</router-link></div>
              <div class="userinfo"><router-link :to="{ name: 'mymessage'}">我的消息</router-link></div>
              <div class="userinfo"><router-link :to="{ name: 'mytask'}">我的任务</router-link></div>
              <div class="userinfo" @click='quit'>退出登陆</div>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="land" v-if="land">
          <div class="login">
            <Login v-on:logining="change"></Login>
          </div>
          <div class="border"></div>
          <div class="register-button">
            <router-link :to="{ name: 'register'}">注册</router-link>
          </div>
        </div>
      </div>
  </div>


</template>

<script>
import Login from '@/components/common/login'
export default {
  name:'Head',
  components:{
    Login,
  },
  props:['isActive'],
  data(){
    return{
      userId:'',
      land:true,
      centerDialogVisibleRegister: false,
      centerDialogVisibleLogin: false,
      lists:[{text:'首页',name:'mainPage'},{text:'知识体系',name:'knowledgeStruct'},{text:'活动',name:'subject'},{text:'文章',name:'articles'},{text:'话题',name:'topic'}]
    }
  },
  methods:{
    quit:function(){
      this.common.deleteCookie('useInfo'),
      this.land = true;
      this.$router.push({name:'mainPage'})
    },
    change:function(data){
      this.land = data[0];
      this.userId = data[1].nick_name;
    }
  },
  mounted(){
    if(this.common.getCookie('useInfo')){
      this.land=false;
      this.userId=this.common.getCookie('useInfo').nick_name;
    }
  }
}
</script>


<style>
.head .active a{
  color: red;
}
.head{
  width: 100%;
  font-size: 18px;
  display: flex;
}

.head .navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}
.head a{
  text-decoration: none;
  color: #010101;
}
.head img{
  display: inline-block;
  height: 100%;
}
.head ul{
  padding: 0;
  margin: 0;
  display: inline-block;
  line-height: 80px;
  margin-left: 40px;
}
.head ul li{
  list-style: none;
  float: left;
  padding: 0 20px;
  text-align: center;
}
.head ul a.active{
  color: red;
}
.head .land{
  float: right;
  font-size: 16px;
}
.head .user{
  font-size: 16px;
}
.head .land .border{
  height: 12px;
  width: 0px;
  border: 1px solid;
  margin-top: 5px;
  padding: 0;
}
.head .land>div{
  padding: 0 20px;
  float: left;
  text-align: center;
}
.head .land div span{
  cursor: pointer;
}
.head .el-dialog{
  height: 350px;
  margin: 0 auto;
}
.head .el-dialog .el-button{
  width: 200px;
  display: block;
  margin: 0 auto;
  margin-top: 40px;
}
.head .land .el-dialog input{
  width: 300px;
  height: 40px;
  margin: 0;
  text-indent: 10px;
  font-size: 16px;
  margin-bottom: 20px;
}
.head .land .el-dialog form div{
  width: 300px;
  display:flex;
  justify-content: space-between;
}
.userinfo{
  font-size: 14px;
  text-align: center;
  width: 80px;
  cursor: pointer;
  padding: 5px 0;
}
.userinfo:hover{
  background-color: #e3e3e3;
}
.userinfo a{
  text-decoration: none;
  color: inherit;
}
.el-dropdown-menu{
  padding: 5px 0;
}
.head .el-dropdown{
  width: 80px;
  text-align: center;
}

</style>
