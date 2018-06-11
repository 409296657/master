<template lang="html">
  <div class="talks">
    <el-container>
      <el-header height="80px"><Head isActive="4"></Head></el-header>
      <el-main>
        <div class="container">
          <div class="headbar">
            <div class="text">
              <h1>{{data.title}}</h1>
              <div class="author">
                <span>{{data.node_name}}</span>&nbsp;·&nbsp;<span>{{user.login}}</span>&nbsp;·&nbsp;{{ReleaseTime}}&nbsp;·&nbsp;{{data.hits}}次阅读
              </div>
            </div>
            <div class="img">
              <img :src="user.avatar_url">
            </div>
          </div>
          <div class="content" v-html="data.body_html">
            {{data.body_html}}
          </div>

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
      </el-main>
     </el-container>
   <el-footer></el-footer>
  </div>





</template>

<script>
import Head from '@/components/common/Head'
export default {
  name:'talks',
  components:{
    Head,
  },
  data(){
    return{
      data:'',
      user:'',
      ReleaseTime:'',
      num:'',
      commentList:'',
      commentTime:[],
    }
  },
  methods:{

  },
  mounted(){
    this.axios({
      method:"GET",
      url:'https://diycode.cc/api/v3/topics/'+this.$route.params.id+'.json',
      params:{
        "offset":'',
        "limit":'',
      },
    })
    .then((res)=>{
      console.log(res)
      this.data = res.data;
      this.user = res.data.user;
      this.ReleaseTime = this.common.formTimeToData(res.data.created_at);

    })
    .catch((err)=>{
        console.log(err)
    })

    this.axios({
      method:"GET",
      url:'https://diycode.cc/api/v3/topics/'+this.$route.params.id+'/replies.json',
      params:{

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
        console.log(err)
    })
  }
}
</script>


<style>
.talks{
  background-color: #f0f0f0;
}
.talks .el-container{
    width: 1000px;
    margin: 0 auto;
}
.talks .el-header{
  padding: 0;
}
.talks .el-main{
  padding: 0;
}
.talks .el-tabs__item{
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  padding:0 30px;
}
.talks .el-tabs__item.is-active{
  color: red;
}
.talks .el-tabs__active-bar{
  display: none;
}
.talks #tab-first{
  margin-right: 30px;
}
.talks .container{
  background-color: #f5faef;
}
.talks .container .headbar{
  height: 80px;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.talks .container .headbar .text{
  height: 100%;
}
.talks .container .headbar .text .author{
  font-size: 12px;
}
.talks .container .headbar .img{
  height: 48px;
  width: 48px;
}
.talks .container .headbar .img img{
  display: inline-block;
  width: 100%;
  height: 100%;
}
.talks .container .content{
  padding: 15px;
  background-color: #fff;
}
.talks .container .content h2{
  padding: 15px;
  border-bottom: 2px solid #eee;
}
.talks .container .content p{
  margin: 20px 0;
}
.talks .container .content img{
  display: inline-block;
  width: 100%;
}
.talks .container .comment{
  background-color: #f5faef;
  margin-top: 50px;
}
.talks .container .comment .num{
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #c2d5e3;
}
.talks .container .comment .none{
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  text-align: center;
}
.talks .container .list{
  padding: 10px 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #c2d5e3;
  background-color: #f5faef;
}
.talks .container .list:hover{
  background-color: #eeeeee;
}
.talks .container .list a{
  color:#666;
  text-decoration: none;
}
.talks .container .list .text{
  display: flex;

}
.talks .container .list .text .img{
  height: 49px;
  width: 49px;
}
.talks .container .list .text .img img{
  display: inline-block;
  height: 100%;
  width: 100%;
}
.talks .container .list .text .details{
  flex: 1;
  box-sizing: border-box;
  padding-left: 15px;
}
.talks .container .list .text .details .title{
  margin-bottom: 5px;
}
.talks .container .list .text .details .title a{
  font-size: 15px;
  color: #356DD0;
}
.talks .container .list .text .details .author{
  font-size: 12px;
  margin-top: 0px;
}
.talks .container .list .text .details .author a{
  font-size: 12px;
}
.talks .container .list .text .tips{
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
