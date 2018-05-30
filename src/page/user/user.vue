<template lang="html">
  <div class="user">
    <el-container>
      <el-header height="80px"><Head isActive="-1"></Head></el-header>
      <el-main>
        <UserInfo></UserInfo>
      </el-main>
     </el-container>
   <el-footer></el-footer>
  </div>





</template>

<script>
import Head from '@/components/common/Head'
import UserInfo from '@/components/user/userInfo'
export default {
  name:'user',
  components:{
    Head,
    UserInfo,
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>


<style>
.user .el-container{
    width: 1000px;
    margin: 0 auto;
}
.user .el-header{
  padding: 0;
}
.user .el-main{
  padding: 0;
}
.user .el-tabs__item{
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  padding:0 30px;
}
.user .el-tabs__item.is-active{
  color: red;
}
.user .el-tabs__active-bar{
  display: none;
}
.user #tab-first{
  margin-right: 30px;
}
</style>
