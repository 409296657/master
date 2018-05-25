<template lang="html">
  <div class="register">
    <div class="head">
      <div><router-link :to="{ name: 'mainPage'}"><img src="../../images/yuanjihua.jpg"></router-link>
      <span>账号注册</span></div>
      <div>已有账号？现在就<el-button type="primary" plain>登录</el-button></div>

    </div>
    <div class="content">

    </div>
  </div>


</template>

<script>
export default {
  name:'register',
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>


<style>
.register{
  width: 1000px;
  margin: 0 auto;
}
.register .head{
  display: flex;
  justify-content: space-between;
  height: 80px;
  border-bottom: 2px solid #e3e3e3;
}
.register .head div{
  font-size: 20px;
  line-height: 80px;
}
.register .head div .router-link-active{
  display: inline-block;
  height: 80px;
}

</style>
