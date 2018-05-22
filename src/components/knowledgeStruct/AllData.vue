<template lang="html">
  <div class="AllData">
    <div class="base">
      <div class="content">
        <div class="left">
          <b>安卓基础</b>
          <p>&nbsp&nbsp&nbsp&nbsp明天今天明天今天明天今天明天今天明天今天明天今天明天今天明天今天明天今天明天今天明天今天明天今天明天今天明天今天明天今天明天今天明天今天明天今天明天今天明天今天</p>
        </div>
        <div class="right">
          <div class="text">
            <b>安卓新手入门</b>
            <p>自学成才不求人</p>
          </div>
        </div>
      </div>
    </div>

    <div class="course">
      <div class="circle"></div>
      <div class="title">
        <p>第一阶段————原生JavaScript入门</p>
        <div class="icon">学习路径</div>
        <LearningPath></LearningPath>

      </div>
      <div class="missionlist">
        <div class="mission">
          <div class="mission-name">
            任务一
          </div>
          <div class="mission-content">
            <div class="mission-todo">
              <h3>论坛网站论坛网站</h3>
              <h3>Lv.<span>一般</span></h3>
            </div>
            <div class="mission-describe">
              <h3>收获什么：发热裤的国际会儿监护人发热裤的国际会裤的国际会裤的国际会</h3>
            </div>
            <div class="operation">
              <div class="details">
                <router-link :to="{ name: ''}">查看详情</router-link>
              </div>
              <div class="receive">
                <router-link :to="{ name: ''}">领取任务</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="mission">
          <div class="mission-name">
            任务一
          </div>
          <div class="mission-content">
            <div class="mission-todo">
              <h3>论坛网站论坛网站</h3>
              <h3>Lv.<span>一般</span></h3>
            </div>
            <div class="mission-describe">
              <h3>收获什么：发热裤的国际会儿监护人发热裤的国际会裤的国际会裤的国际会</h3>
            </div>
            <div class="operation">
              <div class="details">
                <router-link :to="{ name: ''}">查看详情</router-link>
              </div>
              <div class="receive">
                <router-link :to="{ name: ''}">领取任务</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="mission">
          <div class="mission-name">
            任务一
          </div>
          <div class="mission-content">
            <div class="mission-todo">
              <h3>论坛网站论坛网站</h3>
              <h3>Lv.<span>一般</span></h3>
            </div>
            <div class="mission-describe">
              <h3>收获什么：发热裤的国际会儿监护人发热裤的国际会裤的国际会裤的国际会</h3>
            </div>
            <div class="operation">
              <div class="details">
                <router-link :to="{ name: ''}">查看详情</router-link>
              </div>
              <div class="receive">
                <router-link :to="{ name: ''}">领取任务</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>


</template>

<script>
import LearningPath from '@/components/knowledgeStruct/LearningPath'
export default {
  name:'AllData',
  components:{
    LearningPath,
  },
  data(){
    return{
      lists:[{text:'1.1'},{text:'1.2'},{text:'1.3'},{text:'1.4'},{text:'1.5'},{text:'1.6'},{text:'1.7'}],
      items:[{name:1},{name:2},{name:3},{name:4}]
    }
  }
}
</script>


<style>
.AllData{
  width: 100%;
  padding-bottom: 10px;
}
.AllData a{
  text-decoration: none;
  color:inherit;
}
.AllData .base{
  width: 100%;
  margin: 50px 0;
}
.AllData .base .content{
  width:994px;
  margin: auto;
  height: 180px;
  background-color:  #f87934;
  padding: 25px 0px;
  box-sizing: border-box;
  display: flex;
  box-shadow: #bdb3b3 0px 0px 5px 1px;
}
.AllData .base .content .left{
  width:600px;
  height: 100%;
  padding: 0 25px;
  border-right: 1px solid #000;
}
.AllData .base .content .left b{
  font-size: 24px;
}
.AllData .base .content .left p{
  font-size: 14px;
  line-height: 24px;
}
.AllData .base .content .right{
  display: flex;
  justify-content: center;
  align-items: center;
  flex:1;
}
.AllData .base .content .right .text{
  text-align: center;
}
.AllData .base .content .right .text b{
  font-size: 35px;
}
.AllData .base .content .right .text p{
  font-size: 20px;
  margin: 0;
}
.AllData .course{
  width:994px;
  margin: auto;
  box-sizing: border-box;
  box-shadow: #bdb3b3 0px 0px 5px 1px;
  position: relative;
  border-radius: 20px;
}
.AllData .course .circle{
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  top:43px;
  left: 10px;
}
.AllData .course .title{
  padding-left: 50px;
  padding-top: 30px;
  margin-bottom: 30px;
}
.AllData .course .title p{
  margin-bottom: 70px;
  margin-top: 0;
  font-size: 30px;
  font-weight: bold;
}
.AllData .course .title .icon{
  width: 170px;
  height: 36px;
  margin-bottom: 50px;
  border-radius: 18px;
  background-color:  #52dbad;
  text-align: center;
  line-height: 36px;
  font-size: 24px;
  color: #fff;
}.AllData .course .title .list ul{
  padding: 0;
  margin: 0;
}
.AllData .course .title .list li{
  font-size: 20px;
  height: 42px;
  width: 900px;
  line-height: 42px;
  margin: 10px 0;
  background-color: #ededed;
  list-style: none;
  text-indent: 5px;
  padding-right: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.AllData .course .title .list li:hover{
  background-color: #d3d3d3;
}
.AllData .course .missionlist{
  overflow: hidden;
  width: 950px;
  margin: 0 auto;
}
.AllData .course .missionlist .mission{
  width: 300px;
  height: 340px;
  margin: 6px;
  overflow: hidden;
  box-shadow: #bdb3b3 0px 0px 5px 1px;
  float: left;
  margin-bottom: 50px;
}
.AllData .course .mission .mission-name{
  height: 64px;
  background-color: #52dbad;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
}
.AllData .course .mission .mission-content{
  padding: 0 12px;
}
.AllData .course .mission .mission-content .mission-todo{
  height: 90px;
  box-sizing: border-box;
  padding-top:12px;
  border-bottom: 1px dashed;
}
.AllData .course .mission .mission-content .mission-todo h3{
  margin-bottom: 20px;
  margin-top: 0;
}
.AllData .course .mission .mission-content .mission-describe{
  line-height: 40px;
  height: 150px;
  padding-top: 15px;
  box-sizing: border-box;
  overflow: hidden;
}
.AllData .course .mission .mission-content .mission-describe h3{
  margin: 0;
}
.AllData .course .mission .mission-content .operation{
  display: flex;
  justify-content: space-between;
}
.AllData .course .mission .mission-content .operation div{
  width: 128px;
  height: 26px;
  line-height: 23px;
  text-align: center;
  border-radius: 13px;
  border: 1px solid #da5163;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: bold;
  color: #da5163;
  background-color: #fff;
}
.AllData .course .mission .mission-content .operation .receive{
  background-color: #da5163;
  color: #fff;
}

</style>
