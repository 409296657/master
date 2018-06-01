<template lang="html">
  <div class="resetpwd">
    <el-container>
      <el-header height="80px"><Head isActive="-1"></Head></el-header>
      <el-container class="border">
        <el-aside width="180px">
          <List isActive="1"></List>
        </el-aside>
        <el-main>
          <div class="content">
            <ul>
              <li class="title">修改密码</li>
              <li><span>手机号</span>{{mobile}}</li>
              <li><span>新密码:</span><el-input type="password" v-model="pwd" ></el-input></li>
              <li><span>确认密码:</span><el-input type="password" v-model="pwd2" ></el-input></li>
            </ul>
            <el-button type="primary" @click="sub">提交</el-button>
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
  name:'resetpwd',
  components:{
    Head,
    List
  },
  data(){
    return{
      pwd:'',
      pwd2:'',
      mobile:this.common.getCookie('useInfo').mobile,
    }
  },
  methods:{
    sub(){
      this.axios({
        method:"POST",
        url:"http://www.ftusix.com/static/data/reset.php",
        data:{
          "mobile":this.mobile,     //  注册手机号
          "pwd":this.pwd,            //  注册密码
          "pwd2":this.pwd2,            //  确认密码，如果两次不统一会返回失败
          "sms_code":"123456",        //  短信验证码 后端没有验证，在客户端玩吧
        }
      })
      .then((res)=>{
        console.log(res)
        if(res.data.status == 1){
          this.common.deleteCookie('useInfo'),
          alert(res.data.info);
          this.$router.push({name:'mainPage'})
        }else {
          alert(res.data.info);
        }
      })
      .catch((res)=>{

      })
    }
  }
}
</script>


<style>
.resetpwd .el-container{
    width: 1000px;
    margin: 0 auto;
}
.resetpwd .el-container.border{
  border-top: 1px solid #666;
}
.resetpwd .el-header{
  padding: 0;
}
.resetpwd .el-main{
  padding: 0;
}
.resetpwd .el-aside{
  border-right: 1px solid #666;
  height: 500px;
  margin-top: 10px;
}
.resetpwd .el-main{
  margin-top: 10px;
  padding:0 20px;
}
.resetpwd .el-main .content li{
  list-style: none;
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid #666;
  box-sizing: border-box;
}
.resetpwd .el-main .content li .el-input{
  display: inline-block;
  width: 250px;
}
.resetpwd .el-main .content ul{
  margin-bottom: 50px;
}
.resetpwd .el-main .content li.title{
  height: 40px;
  line-height: 40px;
}
.resetpwd .el-main .content li span{
  display: inline-block;
  width: 100px;
}
.resetpwd .el-main .content li.upload{
  padding-top:8px;
}
.resetpwd .el-main .content li.upload img{
  float: left;
  overflow: hidden;
}
.resetpwd .avatar-uploader{
  height: 100%;
}
.resetpwd .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 60px;
    line-height: 60px;
  }
  .resetpwd .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .resetpwd .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .resetpwd .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
</style>
