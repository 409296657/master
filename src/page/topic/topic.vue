<template lang="html">
  <div class="topic">
    <el-container>
      <el-header height="80px"><Head isActive="4"></Head></el-header>
      <el-main>

      </el-main>
     </el-container>
   <el-footer></el-footer>
  </div>





</template>

<script>
import Head from '@/components/common/Head'
export default {
  name:'topic',
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
.topic .el-container{
    width: 1000px;
    margin: 0 auto;
}
.topic .el-header{
  padding: 0;
}
.topic .el-main{
  padding: 0;
}
.topic .el-tabs__item{
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  padding:0 30px;
}
.topic .el-tabs__item.is-active{
  color: red;
}
.topic .el-tabs__active-bar{
  display: none;
}
.topic #tab-first{
  margin-right: 30px;
}
</style>
