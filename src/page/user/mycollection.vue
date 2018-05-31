<template lang="html">
  <div class="mycollection">
    <el-container>
      <el-header height="80px"><Head isActive="-1"></Head></el-header>
      <el-container class="border">
        <el-aside width="180px">
          <List isActive="3"></List>
        </el-aside>
        <el-main>
          222
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
  name:'mycollection',
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
.mycollection .el-container{
    width: 1000px;
    margin: 0 auto;
}
.mycollection .el-container.border{
  border-top: 1px solid #666;
}
.mycollection .el-header{
  padding: 0;
}
.mycollection .el-main{
  padding: 0;
}
.mycollection .el-aside{
  border-right: 1px solid #666;
  height: 500px;
  margin-top: 10px;
}
.mycollection .el-main{
  margin-top: 10px;
}
</style>
