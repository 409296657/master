<template lang="html">
  <div class="mytask">
    <el-container>
      <el-header height="80px"><Head isActive="-1"></Head></el-header>
      <el-container class="border">
        <el-aside width="180px">
          <List isActive="5"></List>
        </el-aside>
        <el-main>
          <div class="content">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="进行中" name="first"></el-tab-pane>
              <el-tab-pane label="已完成" name="second"></el-tab-pane>
              <el-tab-pane label="未通过" name="third"></el-tab-pane>
            </el-tabs>
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
  name:'mytask',
  components:{
    Head,
    List
  },
  data(){
    return{
      activeName: 'first'
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
.mytask .el-container{
    width: 1000px;
    margin: 0 auto;
}
.mytask .el-container.border{
  border-top: 1px solid #666;
}
.mytask .el-header{
  padding: 0;
}
.mytask .el-main{
  padding: 0;
}
.mytask .el-aside{
  border-right: 1px solid #666;
  height: 500px;
  margin-top: 10px;
}
.mytask .el-main{
  margin-top: 10px;
    padding:0 20px;
}
.mytask .el-main .el-tabs__item{
  width: 100px;
  padding: 0 20px !important;
  text-align: center;
}
.mytask .el-main .el-tabs__active-bar{
  display: none;
}
.mytask .el-main .el-tabs__item.is-active{
  color: red;
}
</style>
