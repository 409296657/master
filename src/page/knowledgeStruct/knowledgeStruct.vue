<template lang="html">
  <div class="knowledgeStruct">
    <el-container>
      <el-header height="80px"><Nav></Nav></el-header>
      <el-main>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部" name="first"><AllData></AllData></el-tab-pane>
          <el-tab-pane label="html" name="second">1</el-tab-pane>
          <el-tab-pane label="java" name="third">2</el-tab-pane>
          <el-tab-pane label="php" name="fourth">3</el-tab-pane>
        </el-tabs>
      </el-main>
     </el-container>
   <el-footer></el-footer>
  </div>





</template>

<script>
import Nav from '@/components/common/Nav'
import AllData from '@/components/knowledgeStruct/ob/AllData'
export default {
  name:'knowledgeStruct',
  components:{
    Nav,
    AllData
  },
  data(){
    return{
      activeName: 'first',
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
.knowledgeStruct .el-container{
    width: 1000px;
    margin: 0 auto;
}
.knowledgeStruct .el-header{
  padding: 0;
}
.knowledgeStruct .el-main{
  padding: 0;
}
.knowledgeStruct .el-tabs__item{
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  padding:0 30px;
}
.knowledgeStruct .el-tabs__item.is-active{
  color: red;
}
.knowledgeStruct .el-tabs__active-bar{
  display: none;
}
.knowledgeStruct #tab-first{
  margin-right: 30px;
}
</style>
