<template lang="html">
  <div class="topic">
    <el-container>
      <el-header height="80px"><Head isActive="2"></Head></el-header>
      <el-main>
        <div class="container">
          <div class="nodes">
            <div class="button" :class="{active:!nodeid}" @click="select()">全部</div>
            <div class="button" v-for="node in nodeList" :class="{active:node.id==nodeid}" @click="select(node)">
              {{node.name}}
            </div>
          </div>
          <div class="content">
            <div class="list" v-for="(list,index) in lists" @click="comment(list)">
              <div class="text">
                <div class="img">
                  <img :src="list.user.avatar_url">
                </div>
                <div class="details">
                  <div class="title">
                    <a :href="list.address" target="_Blank" @click.stop="doThis">{{list.title}}</a>
                  </div>
                  <div class="author">
                    <router-link :to="{ name: '', params: {} }">{{list.node_name}}</router-link>&nbsp;·&nbsp;
                    <router-link :to="{ name: '', params: {} }">{{list.user.login}}</router-link>&nbsp;·&nbsp;
                    {{formTimeToData[index]}}
                  </div>
                </div>
                <div class="tips" v-if="list.replied_at">
                  {{list.replies_count}}
                </div>
              </div>
            </div>
          </div>
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
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
      nodeid:this.$route.params.nodeid,
      nodeList:[],
      access_token:'',
      lists:[],
      formTimeToData:[],
      currentPage: this.$route.params.pagenum,
    }
  },
  methods:{
    comment:function(list){
      console.log(list)
      this.$router.push({path:'topic/'+list.id})
    },
    handleCurrentChange(val) {
      console.log(val);
      let nodeid = this.nodeid?this.nodeid:'';
      if (nodeid) {
        this.$router.push({path:'/topic/node'+nodeid+'/page'+val})
      }else {
        this.$router.push({path:'/topic/page'+val})
      };
      this.ajax()
    },
    select:function(node){
      let nodeid=node?node.id:'';
      if (nodeid) {
        this.$router.push({path:'/topic/node'+nodeid})
      }else {
        this.$router.push({path:'/topic'})
      }
      this.nodeid = node?node.id:'';
      this.currentPage = 1;
      this.ajax()
    },
    ajax:function(){
      this.axios({
        method:"GET",
        url:'https://diycode.cc/api/v3/news.json',
        params:{
          "node_id":this.$route.params.nodeid,
          "offset":this.$route.params.pagenum?((this.$route.params.pagenum-1)*20):'',
          "limit":'20',
        },
      })
      .then((res)=>{
        console.log(res)
        this.lists = res.data;
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].replied_at) {
            let t = res.data[i].replied_at;
            let rt = this.common.replyTimeToData(t);
            this.formTimeToData[i]=rt;
          }else {
            let t = res.data[i].created_at;
            let rt = this.common.formTimeToData(t);
            this.formTimeToData[i]=rt;
          }
        }
      })
      .catch((err)=>{

      })
    }
  },
  mounted(){
    this.axios({
      method:"GET",
      url:'https://diycode.cc/api/v3/news/nodes.json',
    })
    .then((res)=>{
      // console.log(res)
      this.nodeList = res.data;
    })
    .catch((err)=>{

    })
    this.axios({
      method:"POST",
      url:'https://www.diycode.cc/oauth/token',
      data:{
        "client_id":"d1c3e2b5",
        "client_secret":"ad07d3bb7b46ae281e2d637c93a2757a0f5882a80d677e2e1f2e7b7f61087026",
        "grant_type":"password",
        "password":"gaosan1407",
        "username":"1342525283"
      },
    })
    .then((res)=>{
      // console.log(res)
      this.access_token = res.data.access_token;
    })
    .catch((err)=>{

    })

    this.ajax()
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
  border-bottom: 1px solid #c2d5e3;
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
  color: #fff;
  cursor: pointer;
}
.topic .container .nodes .button.active{
  background-color: #f87b00;
}
.topic .container .nodes .button a{
  color: #fff;
  text-decoration: none;
}
.topic .content .list{
  height: 70px;
  padding: 10px 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #c2d5e3;
  background-color: #f5faef;
  cursor: pointer;
}
.topic .content .list:hover{
  background-color: #eeeeee;
}
.topic .content .list a{
  color:#666;
  text-decoration: none;
}
.topic .content .list .text{
  display: flex;

}
.topic .content .list .text .img{
  height: 49px;
  width: 49px;
}
.topic .content .list .text .img img{
  display: inline-block;
  height: 100%;
  width: 100%;
}
.topic .content .list .text .details{
  flex: 1;
  box-sizing: border-box;
  padding-left: 15px;
}
.topic .content .list .text .details .title{
  margin-bottom: 5px;
}
.topic .content .list .text .details .title a{
  font-size: 15px;
  color: #356DD0;
}
.topic .content .list .text .details .author{
  font-size: 12px;
  margin-top: 10px;
}
.topic .content .list .text .details .author a{
  font-size: 12px;
}
.topic .content .list .text .tips{
  width: 30px;
  height: 16px;
  border-radius: 8px;
  background-color: #aaaaaa;
  color: #fff;
  margin: auto 0;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
}
</style>
