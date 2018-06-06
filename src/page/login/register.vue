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
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="手机号码" prop="phoneNum">
          <el-input v-model.number="ruleForm2.phoneNum"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
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
    var checkPhoneNum = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号码不能为空'));
        }
        setTimeout(() => {
          if (!this.common.isvalidPhone(value)) {
              callback(new Error('请输入正确的11位手机号码'));
            } else {
              callback();
            }
        }, 300);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return{
      ruleForm2: {
          pass: '',
          checkPass: '',
          phoneNum: ''
        },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        phoneNum: [
          { validator: checkPhoneNum, trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios({
            method:"POST",
            url:"http://www.ftusix.com/static/data/register.php",
            data:{
              "mobile":this.ruleForm2.phoneNum,     //  注册手机号
              "pwd":this.ruleForm2.pass,            //  注册密码
              "sms_code":"123456",
            }
          })
          .then((res)=>{
            console.log(res)
            if(res.data.status==1){
              let userData = res.data.data;
              this.common.setCookie('useInfo',userData,'30');
              alert(res.data.info);
              setTimeout(()=>{
                this.$router.push({name:'mainPage'});
              },2000)
            }else{
              alert(res.data.info)
            }
          })
          .catch(function(err){

          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },




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
  width: 400px;
  margin: 0 auto;
}


</style>
