<template lang="html">
  <div class="Articles">
    <div class="th">
      <div class="userid">作者</div><div class="time">发表时间</div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="所有文章" name="first">
        <div class="content">
          <ul>
            <li>
              <div class="list">
                <div class="article-title">
                  <div class="article-type"><router-link :to="{ name: ''}">[javascript]</router-link></div>
                  <div class="title"><router-link :to="{ name: ''}">到底写的什么几把</router-link></div>
                </div>
                <div class="article-info">
                  <div class="article-user">OB</div>
                  <div class="article-time">2018/05/24 16：47</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </el-tab-pane>



      <el-tab-pane label="ios" name="second">ios</el-tab-pane>
      <el-tab-pane label="javascript" name="third">javascript</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>

    </el-tabs>
  </div>


</template>

<script>
export default {
  name:'Articles',
  data(){
    return{
      activeName: 'first',
    }
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
    },
  }
}
</script>


<style>
.Articles{
  position: relative;
}
.Articles .el-tabs__nav-scroll{
  padding: 0 25px;
  height: 50px;
  line-height: 50px;
  margin-top: 20px;
}
.Articles .el-tabs__item{
  font-size: 14px;
  padding: 0 20px;
}
.Articles a{
  text-decoration: none;
  color: inherit;
}
.Articles li{
  list-style: none;
  border-bottom: 1px solid #e3e3e3;
}
.Articles .content li .list{
  height: 50px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Articles .th{
  margin-right: 25px;
  position: absolute;
  right: 0;
  top: 40px;
}
.Articles .th div{
  float: left;
  width: 150px;
  text-align: center;
  font-size: 14px;
}
.Articles .list{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.Articles .list .article-title div{
  float: left;
}
.Articles .list .article-title .title{
  margin-left: 25px;
}
.Articles .list .article-info div{
  float: left;
  width: 150px;
  text-align: center;
}



</style>
