<template lang="html">
  <div class="head">
      <img src="../../images/yuanjihua.jpg">
      <div class="navbar">
        <ul>
          <li v-for='(list,index) in lists' :class="{active:index==isActive}" >
            <router-link :to="{name:list.name}"><b>{{list.text}}</b></router-link>
          </li>
        </ul>
        <div class="land">
          <div class="login">
            <Login></Login>
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
      centerDialogVisibleRegister: false,
      centerDialogVisibleLogin: false,
      lists:[{text:'首页',name:'mainPage'},{text:'知识体系',name:'knowledgeStruct'},{text:'活动',name:'subject'},{text:'文章',name:'articles'},{text:'话题',name:'topic'}]
    }
  },
  methods:{

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

</style>
