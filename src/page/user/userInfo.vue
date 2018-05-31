<template lang="html">
  <div class="userInfo">
    <el-container>
      <el-header height="80px"><Head isActive="-1"></Head></el-header>
      <el-container class="border">
        <el-aside width="180px">
          <List isActive="0"></List>
        </el-aside>
        <el-main>
          <div class="content">
            <ul>
              <li class="title">个人信息</li>
              <li><img src="" alt="">更换头像</li>
              <li><span>注册手机号</span><el-input type="text"></el-input></li>
              <li><span>昵称</span><el-input type="text" :value="this.common.getCookie('useID')"></el-input></li>
              <li><span>性别</span>男<input type="radio" name="sex">女<input type="radio" name="sex"></li>
            </ul>
            <el-button type="primary">提交</el-button>
          </div>
        </el-main>
      </el-container>
     </el-container>
   <el-footer></el-footer>
  </div>





</template>

<script>
import Head from '@/components/common/Head'
import List from '@/components/user/list'
export default {
  name:'userInfo',
  components:{
    Head,
    List
  },
  data(){
    return{

    }
  },
  methods:{

  },
}
</script>


<style>
.userInfo .el-container{
    width: 1000px;
    margin: 0 auto;
}
.userInfo .el-container.border{
  border-top: 1px solid #666;
}
.userInfo .el-header{
  padding: 0;
}
.userInfo .el-main{
  padding: 0;
}
.userInfo .el-aside{
  border-right: 1px solid #666;
  height: 500px;
  margin-top: 10px;
}
.userInfo .el-main{
  margin-top: 10px;
  padding:0 20px;
}
.userInfo .el-main .content li{
  list-style: none;
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid #666;
}
.userInfo .el-main .content li .el-input{
  display: inline-block;
  width: 250px;
}
.userInfo .el-main .content ul{
  margin-bottom: 50px;
}
.userInfo .el-main .content li.title{
  height: 40px;
  line-height: 40px;
}
.userInfo .el-main .content li span{
  display: inline-block;
  width: 100px;
}
</style>
