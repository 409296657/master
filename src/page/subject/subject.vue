<template lang="html">
  <div class="subject">
    <el-container>
      <el-header height="80px"><Head isActive="2"></Head></el-header>
      <el-main>

      </el-main>
     </el-container>
   <el-footer></el-footer>
  </div>





</template>

<script>
import Head from '@/components/common/Head'
export default {
  name:'subject',
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
.subject .el-container{
    width: 1000px;
    margin: 0 auto;
}
.subject .el-header{
  padding: 0;
}
.subject .el-main{
  padding: 0;
}
.subject .el-tabs__item{
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  padding:0 30px;
}
.subject .el-tabs__item.is-active{
  color: red;
}
.subject .el-tabs__active-bar{
  display: none;
}
.subject #tab-first{
  margin-right: 30px;
}
</style>
