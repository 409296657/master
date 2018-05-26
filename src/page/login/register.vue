<template lang="html">
  <div class="register">
    <div class="register-head">
      <div class="logo">
        <div><router-link :to="{ name: 'mainPage'}"><img src="../../images/yuanjihua.jpg"></router-link></div>
        <div><span>账号注册</span></div>
      </div>
      <div class="login-part"><div class="login-text">已有账号？现在就</div><Login></Login></div>
    </div>
    <div class="content">
      <div class="item">
        <div>用户名</div>
        <input type="text" placeholder="请设置用户名" v-model="userId">
        <div class="tips"><div class="text"><div><p>设置后不可更改</p><p>中英文均可，最长14个英文或7个汉字</p></div></div></div>
      </div>
      <div class="item">
        <div>手机号</div>
        <input type="text" placeholder="可用于登录和找回密码" v-model="phoneNum">
        <div class="tips"><div class="text"><div><p>输入中国大陆手机号，其他用户不可见</p></div></div></div>
      </div>
      <div class="item">
        <div>密码</div>
        <input type="password" placeholder="请设置登陆密码" v-model="psw">
      </div>
      <el-button type="primary" @click="userRegister">注 册</el-button>
    </div>

  </div>


</template>

<script>
import Login from '@/components/common/login'
export default {
  name:'register',
  components:{
    Login,
  },
  data(){
    return{
      userId:'',
      phoneNum:'',
      psw:'',
    }
  },
  methods:{
    userRegister:function(){
      ajax({
        method:"POST",
        url:"http://www.ftusix.com/static/data/register.php",
        data:{
          "mobile":"phoneNum",     //  注册手机号
          "pwd":"psw",            //  注册密码
          "sms_code":"123456",
        }
      })
      .then(function(res){
        console.log(res)
      })
      .catch(function(err){

      })

    }
  }
}
</script>


<style>
.register{
  width: 1000px;
  margin: 0 auto;
}
.register .register-head{
  display: flex;
  justify-content: space-between;
  height: 80px;
  border-bottom: 2px solid #e3e3e3;
}
.register .register-head .logo div{
  float: left;
  height: 100%;
}
.register .register-head .logo div span{
  line-height: 80px;
  font-size: 20px;
  margin-left: 30px;
}
.register .register-head .login-part>div{
  float: left;
}
.register .register-head .login-text{
  font-size: 20px;
  line-height: 80px;
}
.register .register-head .login>span{
  font-size: 20px;
  line-height: 80px;
  color: blue;
  text-decoration:underline;
  cursor: pointer;
}
.register .el-dialog__body form div a:last-child{
  display: none;
}
.register .content{
  padding-top: 50px;
  margin-left: 300px;
}
.register .content .item{
  height: 40px;
  display: flex;
  margin: 20px 0;
}
.register .content .item>div:first-child{
  width: 65px;
  text-align: right;
  margin-right: 5px;
  font-size: 16px;
  line-height: 40px;
}
.register .content .item input{
  width: 350px;
  margin-right: 10px;
  text-indent: 15px;
}
.register .content .item>div:last-child{
  font-size: 12px;
  line-height: 16px;
  color: #666;
}
.register .content .item .tips{
  display: none;
}
.register .content .item .tips .text{
  display: flex;
  align-items: center;
  height: 100%;
}
.register .content .item input:focus + .tips{
  display: block;
}
.register .content .el-button{
  width: 350px;
  height: 50px;
  margin-left: 70px;
  margin-top: 20px;
}

</style>
