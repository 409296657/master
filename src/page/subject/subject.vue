<template lang="html">
  <div class="subject">
    <el-container>
      <el-header height="80px"><Head isActive="4"></Head></el-header>
      <el-main>
        <div class="content">
          <div class="list" v-for="(item,index) in itemList">
            <div class="text">
              <div class="img">
                <img :src="item.user.avatar_url">
              </div>
              <div class="details">
                <div class="title">
                  <router-link :to="{ path:'/subject/'+item.id }">{{item.title}}</router-link>
                </div>
                <div class="author">
                  <span>{{item.node_name}}</span>&nbsp;·&nbsp;
                  <router-link :to="{ name: '', params: {} }">{{item.user.login}}</router-link>&nbsp;·&nbsp;
                  {{formTimeToData[index]}}
                </div>
              </div>
              <div class="tips" v-if="item.replied_at">
                {{item.replies_count}}
              </div>
            </div>
          </div>
        </div>

        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="20"
          layout="prev, pager, next, jumper"
          :total="Number(pagenum)">
        </el-pagination>
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
      itemList:'',
      formTimeToData:[],
      currentPage:Number(this.$route.params.page),
      pagenum:'',
    }
  },
  methods:{
     handleCurrentChange(val) {
       this.$router.push({path:'/subject/page'+val})
       this.ajax()
     },
     ajax(){
       this.axios({
         method:"GET",
         url:"https://diycode.cc/api/v3/topics.json",
         params:{
           "type":"last_actived",
           "node_id":"",
           "offset":((this.currentPage-1)*20),
           "limit":"20",
         }
       })
       .then((res)=>{
         console.log(res)
         let data = res.data;
         this.itemList = data;
         for (var i = 0; i < res.data.length; i++) {
           if (data[i].replied_at) {
             let t = data[i].replied_at;
             this.formTimeToData[i] = this.common.replyTimeToData(t)
           }else if (data[i].updated_at)  {
               let t = data[i].updated_at;
               this.formTimeToData[i] = this.common.updataTimeToData(t)
             }else {
               let t = data[i].created_at;
               this.formTimeToData[i] = this.common.formTimeToData(t)
             }
         }

       })
       .catch((err)=>{

       })
     }
  },
  mounted(){
    this.ajax()
    this.axios({
      method:"GET",
      url:"https://diycode.cc/api/v3/topics.json",
      params:{
        "type":"last_actived",
        "node_id":"",
        "offset":"",
        "limit":"",
      }
    })
    .then((res)=>{
      this.pagenum = res.data.length
    })
    .catch((err)=>{

    })
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
.subject .content{
  margin-top: 50px;
}
.subject .content .list{
  height: 70px;
  padding: 10px 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #c2d5e3;
  background-color: #f5faef;
}
.subject .content .list:hover{
  background-color: #eeeeee;
}
.subject .content .list a{
  color:#666;
  text-decoration: none;
}
.subject .content .list .text{
  display: flex;

}
.subject .content .list .text .img{
  height: 49px;
  width: 49px;
}
.subject .content .list .text .img img{
  display: inline-block;
  height: 100%;
  width: 100%;
}
.subject .content .list .text .details{
  flex: 1;
  box-sizing: border-box;
  padding-left: 15px;
}
.subject .content .list .text .details .title{
  margin-bottom: 5px;
}
.subject .content .list .text .details .title a{
  font-size: 15px;
  color: #356DD0;
}
.subject .content .list .text .details .author{
  font-size: 12px;
  margin-top: 10px;
}
.subject .content .list .text .details .author a{
  font-size: 12px;
}
.subject .content .list .text .tips{
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
