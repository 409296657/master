<template lang="html">
  <div class="topic">
    <el-container>
      <el-header height="80px"><Head isActive="4"></Head></el-header>
      <el-main>
        <div class="container">
          <div class="nodes">
            <div class="button" v-for="node in nodeList" :class="{active:node.id==nodeid}" @click="nodeid=node.id">
              <router-link :to="{ path: 'topic/node'+node.id}">{{node.name}}</router-link>
            </div>
          </div>
        </div>
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
      nodeid:1,
      nodeList:[],
    }
  },
  methods:{

  },
  mounted(){
    this.axios({
      method:"GET",
      url:'https://diycode.cc/api/v3/news/nodes.json',
    })
    .then((res)=>{
      console.log(res)
      this.nodeList = res.data;
    })
    .catch((err)=>{

    })
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
.topic .container .nodes{
  padding: 20px 15px;
  background-color: #f9f9f9;
}
.topic .container .nodes .button{
  display: inline-block;
  padding: 0 10px;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  background-color: #aab5c3;
  border-radius: 10px;
  margin-right: 15px;
  margin-bottom: 15px;
}
.topic .container .nodes .button.active{
  background-color: #f87b00;
}
.topic .container .nodes .button a{
  color: #fff;
  text-decoration: none;
}
</style>
