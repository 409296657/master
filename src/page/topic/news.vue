<template lang="html">
  <div class="news">
    <el-container>
      <el-header height="80px"><Head isActive="2"></Head></el-header>
      <el-main>
        <div class="container">
          <div class="content">
            <div class="list">
              <div class="text">
                <div class="img">
                  <img src="">
                </div>
                <div class="details">
                  <div class="title"><a href="" target="_Blank">22</a></div>
                  <div class="author">
                    <router-link :to="{ name: '', params: {} }">22</router-link>&nbsp;·&nbsp;
                    <router-link :to="{ name: '', params: {} }">22</router-link>&nbsp;·&nbsp;
                    22
                  </div>
                </div>
                <!-- <div class="tips" v-if="list.replied_at">
                  {{list.replies_count}}
                </div> -->
              </div>
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
  name:'news',
  components:{
    Head,
  },
  data(){
    return{

    }
  },
  methods:{
    ajax:function(){
      this.axios({
        method:"GET",
        url:'https://diycode.cc/api/v3/news/'+this.$route.params.id+'/replies.json',
        params:{
          "offset":'',
          "limit":'20',
        },
      })
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{

      })
    }
  },
  mounted(){
    this.ajax()
  }
}
</script>


<style>
.news .el-container{
    width: 1000px;
    margin: 0 auto;
}
.news .el-header{
  padding: 0;
}
.news .el-main{
  padding: 0;
}
.news .el-tabs__item{
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  padding:0 30px;
}
.news .el-tabs__item.is-active{
  color: red;
}
.news .el-tabs__active-bar{
  display: none;
}
.news #tab-first{
  margin-right: 30px;
}
.news .container .nodes{
  padding: 20px 15px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #c2d5e3;
}
.news .container .nodes .button{
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
.news .container .nodes .button.active{
  background-color: #f87b00;
}
.news .container .nodes .button a{
  color: #fff;
  text-decoration: none;
}
.news .content .list{
  height: 70px;
  padding: 10px 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #c2d5e3;
  background-color: #f5faef;
  cursor: pointer;
}
.news .content .list:hover{
  background-color: #eeeeee;
}
.news .content .list a{
  color:#666;
  text-decoration: none;
}
.news .content .list .text{
  display: flex;

}
.news .content .list .text .img{
  height: 49px;
  width: 49px;
}
.news .content .list .text .img img{
  display: inline-block;
  height: 100%;
  width: 100%;
}
.news .content .list .text .details{
  flex: 1;
  box-sizing: border-box;
  padding-left: 15px;
}
.news .content .list .text .details .title{
  margin-bottom: 5px;
}
.news .content .list .text .details .title a{
  font-size: 15px;
  color: #356DD0;
}
.news .content .list .text .details .author{
  font-size: 12px;
  margin-top: 10px;
}
.news .content .list .text .details .author a{
  font-size: 12px;
}
.news .content .list .text .tips{
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
