<template lang="html">
  <div class="knowledgeCard">
    <el-container>
      <el-header height="80px"><Head></Head></el-header>
      <el-main>
        <div class="card">
          <div class="title"><b>知识点1：HTML基础</b></div>
          <el-tabs type="border-card">
            <el-tab-pane label="详情">
              <div>1、xxx知识</div>
              <div>demo</div>
              <div>{{text}}</div>
              <el-button round>下一节</el-button>
            </el-tab-pane>
            <el-tab-pane label="任务">
              <div></div>
              <div></div>
              <div></div>
            </el-tab-pane>
          </el-tabs>
        </div>

      </el-main>
     </el-container>
   <el-footer></el-footer>
  </div>





</template>

<script>
import Head from '@/components/common/Head'
export default {
  name:'knowledgeCard',
  components:{
    Head,
  },
  data(){
    return{
      text:'HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础HTML基础',
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
.knowledgeCard .el-container{
    width: 1000px;
    margin: 0 auto;
}
.knowledgeCard .el-header{
  padding: 0;
}
.knowledgeCard .el-main{
  padding: 0;
}
.knowledgeCard .card{
  width: 994px;
  margin: 50px auto;
  box-shadow: #bdb3b3 0px 0px 5px 1px;
  border-radius: 15px;
}
.knowledgeCard .card .title{
  height: 45px;
  background-color: #c0c2c1;
  font-size: 18px;
  line-height: 45px;
  border-bottom: 1px solid #000;
  text-indent: 20px;
  border-radius: 15px 15px 0 0;
}
.knowledgeCard .card .el-tabs{
    border-radius: 0 0 15px 15px;
}
.knowledgeCard .card .el-tabs__item{
  width: 110px;
  height: 45px;
  padding: 0;
  text-align: center;
  line-height: 45px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
}
.knowledgeCard .card .el-tabs__item.is-top:hover{
  color: #000;
}
.knowledgeCard .card .el-tabs__item.is-active{
  color: inherit;
}
.knowledgeCard .card .el-tabs__content{
  height: 550px;
  padding: 45px 30px;
  font-size: 15px;
  line-height: 30px;
}
.knowledgeCard .card .el-button{
  width: 150px;
  height: 30px;
  position: absolute;
  bottom: 40px;
  margin-left: -76px;
  left: 50%;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  border-color: red;
  color: red;
  padding: 0;
}
.knowledgeCard .card .el-button:hover{
  background-color: inherit;
  color: red;
}

</style>
