<template lang="html">
  <div class="mainPage">
    <el-container>
      <el-header height="80px"><Head></Head></el-header>
      <el-main>

      </el-main>
     </el-container>
   <el-footer></el-footer>
  </div>





</template>

<script>
import Head from '@/components/common/Head'
export default {
  name:'mainPage',
  components:{
    Head,
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
.mainPage .el-container{
    width: 1000px;
    margin: 0 auto;
}
.mainPage .el-header{
  padding: 0;
}
.mainPage .el-main{
  padding: 0;
}
.mainPage .el-tabs__item{
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  padding:0 30px;
}
.mainPage .el-tabs__item.is-active{
  color: red;
}
.mainPage .el-tabs__active-bar{
  display: none;
}
.mainPage #tab-first{
  margin-right: 30px;
}
</style>
