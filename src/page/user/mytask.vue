<template lang="html">
  <div class="mytask">
    <el-container>
      <el-header height="80px"><Head isActive="-1"></Head></el-header>
      <el-container class="border">
        <el-aside width="180px">
          <List isActive="5"></List>
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
  name:'mytask',
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
}
</style>
