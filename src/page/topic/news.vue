<template lang="html">
  <div class="news">
    <el-container>
      <el-header height="80px"><Head isActive="2"></Head></el-header>
      <el-main>
        <div class="container">
          <div class="content">

            <div class="comment" v-if="commentList">
              <div class="num">共收到{{num}}条回复</div>
              <div class="list" v-for="(comment,index) in commentList">
                <div class="text">
                  <div class="img">
                    <img :src="comment.user.avatar_url">
                  </div>
                  <div class="details">
                    <div class="author">
                      <router-link :to="{ name: '', params: {} }">{{comment.user.login}}</router-link>&nbsp;·&nbsp;
                      <router-link :to="{ name: '', params: {} }">#{{index+1}}</router-link>&nbsp;·&nbsp;
                      {{commentTime[index]}}
                    </div>
                    <div class="answer" v-html="comment.body_html">{{comment.body_html}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment" v-else>
              <div class="none">
                暂无回复
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
      commentList:'',
      num:0,
      commentTime:[],
    }
  },
  methods:{

  },
  mounted(){
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
      if (res.data.length!==0) {
        this.commentList = res.data;
        this.num = res.data.length;
        for (var i = 0; i < res.data.length; i++) {
          let time = res.data[i].updated_at;
          this.commentTime[i]=this.common.replyTimeToData(time)
        }
      }else {

      }
    })
    .catch((err)=>{

    })


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
.news .content .list{
  padding: 10px 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #c2d5e3;
  background-color: #f5faef;
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
  margin-top: 0px;
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
.news .content .comment{
  background-color: #f5faef;
  margin-top: 50px;
}
.news .content .comment .num{
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #c2d5e3;
}
.news .content .comment .none{
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  text-align: center;
}

</style>
