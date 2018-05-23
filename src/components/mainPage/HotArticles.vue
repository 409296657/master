<template lang="html">
  <div class="HotArticles">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="热门文章" name="first">热门文章</el-tab-pane>
      <el-tab-pane label="推荐" name="second">推荐</el-tab-pane>
      <el-tab-pane label="php" name="third">php</el-tab-pane>
      <el-tab-pane label="ios" name="fourth">ios</el-tab-pane>
      <el-tab-pane label="python" name="fifth">python</el-tab-pane>
      <el-tab-pane label="java" name="sixth">java</el-tab-pane>
    </el-tabs>
  </div>


</template>

<script>
export default {
  name:'HotArticles',
  data(){
    return{
      activeName: 'second'
    }
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>


<style>
.HotArticles .el-tabs__nav-scroll{
  padding: 0 25px;
  font-size: 20px;
  height: 70px;
  line-height: 70px;
  margin-top: 20px;
}
.HotArticles .el-tabs__content{
  padding: 0 25px;
}

</style>
