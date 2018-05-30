<template lang="html">
  <div class="userInfo">
    <el-tabs v-model="activeName" tab-position='left'>
      <el-tab-pane label="我的信息" name="1">用户管理</el-tab-pane>
      <el-tab-pane label="修改密码" name="2">配置管理</el-tab-pane>
      <el-tab-pane label="我的帖子" name="3">角色管理</el-tab-pane>
      <el-tab-pane label="我的收藏" name="4">定时任务补偿</el-tab-pane>
      <el-tab-pane label="我的消息" name="5">定时任务补偿</el-tab-pane>
      <el-tab-pane label="我的任务" name="6">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>


</template>

<script>
export default {
  name:'userInfo',
  data(){
    return{
      activeName: '',
    }
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  mounted(){
    this.activeName=this.$route.params.activeName;
  }
}
</script>


<style>
.userInfo{
  border-top: 1px solid #e3e3e3;
}
.userInfo .el-tabs{
  height: 500px;
}
.userInfo .el-tabs .el-tabs__item{
  border-bottom: 1px solid #666;
  margin: 0 20px;
}


</style>
