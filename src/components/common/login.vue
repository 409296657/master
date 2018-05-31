<template lang="html">
  <div class="login">
    <span @click="centerDialogVisibleLogin = true">登陆</span>
    <el-dialog
      title="用户登录"
      :visible.sync="centerDialogVisibleLogin"
      width="360px"
      :close-on-click-modal="false"
      :lock-scroll="false"
      center>
      <form class="">
        <input type="text" name="" placeholder="请输入手机号码" v-model="mobile">
        <input type="password" name="" placeholder="请输入密码" v-model="psw">
        <div>
          <router-link :to="{ name: ''}">忘记密码？</router-link>
          <router-link :to="{ name: 'register'}">注册账号</router-link>
        </div>
        <el-button type="primary" @click="login">登 录</el-button>
      </form>
    </el-dialog>

  </div>


</template>

<script>
export default {
  name:'login',
  data(){
    return{
      mobile:'',
      psw:'',
      centerDialogVisibleRegister: false,
      centerDialogVisibleLogin: false,
    }
  },
  methods:{
    login(){
      this.axios({
        method:"POST",
        url:"http://www.ftusix.com/static/data/login.php",
        data:{
          "mobile":this.mobile,
          "pwd":this.psw,
        }
      })
      .then((res)=>{
        console.log(res)
        if(res.data.status==1){
          this.centerDialogVisibleLogin = false
          let userData = res.data.data[0];
          this.common.setCookie('useInfo',userData,'30')
          console.log(this.common.getCookie('useID'))
          this.$emit("logining",[false,this.common.getCookie('useInfo')])
        }else{
          alert(res.data.info)
        }
      })
      .catch(function(err){

      })
    }
  }
}
</script>


<style>
.login div span{
  cursor: pointer;
}
.login .el-dialog{
  height: 350px;
  margin: 0 auto;
}
.login .el-dialog .el-button{
  width: 200px;
  display: block;
  margin: 0 auto;
  margin-top: 40px;
}
.login .el-dialog input{
  width: 300px;
  height: 40px;
  margin: 0;
  text-indent: 10px;
  font-size: 16px;
  margin-bottom: 20px;
}
.login .el-dialog form div{
  width: 300px;
  display:flex;
  justify-content: space-between;
}
.login a{
  color: inherit;
  text-decoration: none;
}

</style>
