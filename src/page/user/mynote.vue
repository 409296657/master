<template lang="html">
  <div class="mynote">
    <el-container>
      <el-header height="80px"><Head isActive="-1"></Head></el-header>
      <el-container class="border">
        <el-aside width="180px">
          <List isActive="2"></List>
        </el-aside>
        <el-main>
          1
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
  name:'user',
  components:{
    Head,
    List
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
.mynote .el-container{
    width: 1000px;
    margin: 0 auto;
}
.mynote .el-container.border{
  border-top: 1px solid #666;
}
.mynote .el-header{
  padding: 0;
}
.mynote .el-main{
  padding: 0;
}
.mynote .el-aside{
  border-right: 1px solid #666;
  height: 500px;
  margin-top: 10px;
}
.mynote .el-main{
  margin-top: 10px;
}
</style>
