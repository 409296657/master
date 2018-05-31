<template lang="html">
  <div class="resetpwd">
    <el-container>
      <el-header height="80px"><Head isActive="-1"></Head></el-header>
      <el-container class="border">
        <el-aside width="180px">
          <List isActive="1"></List>
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
  name:'resetpwd',
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
.resetpwd .el-container{
    width: 1000px;
    margin: 0 auto;
}
.resetpwd .el-container.border{
  border-top: 1px solid #666;
}
.resetpwd .el-header{
  padding: 0;
}
.resetpwd .el-main{
  padding: 0;
}
.resetpwd .el-aside{
  border-right: 1px solid #666;
  height: 500px;
  margin-top: 10px;
}
.resetpwd .el-main{
  margin-top: 10px;
}
</style>
