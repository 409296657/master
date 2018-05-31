<template lang="html">
  <div class="mymessage">
    <el-container>
      <el-header height="80px"><Head isActive="-1"></Head></el-header>
      <el-container class="border">
        <el-aside width="180px">
          <List isActive="4"></List>
        </el-aside>
        <el-main>
          2
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
  name:'mymessage',
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
.mymessage .el-container{
    width: 1000px;
    margin: 0 auto;
}
.mymessage .el-container.border{
  border-top: 1px solid #666;
}
.mymessage .el-header{
  padding: 0;
}
.mymessage .el-main{
  padding: 0;
}
.mymessage .el-aside{
  border-right: 1px solid #666;
  height: 500px;
  margin-top: 10px;
}
.mymessage .el-main{
  margin-top: 10px;
}
</style>
