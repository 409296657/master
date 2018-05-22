<template lang="html">
  <div class="head">
      <img src="@/img/yuanjihua.jpg">
      <div class="navbar">
        <ul>
          <li v-for='list in lists'><router-link :to="{ name: ''}"  v-bind:class='list.class'><b>{{list.text}}</b></router-link></li>
        </ul>
        <div class="land">
          <div>
            <a href="#">登陆</a>
          </div>
          <div class="border"></div>
          <div>
            <a href="#">注册</a>
          </div>
        </div>
      </div>
  </div>


</template>

<script>
export default {
  name:'Head',
  data(){
    return{
      lists:[{text:'首页',class:''},{text:'知识体系',class:'active'},{text:'活动',class:''},{text:'纹章',class:''},{text:'题目',class:''}]
    }
  }
}
</script>


<style scoped>
.head{
  width: 100%;
  font-size: 18px;
  display: flex;
}

.head .navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}
.head a{
  text-decoration: none;
  color: #010101;
}
.head img{
  display: inline-block;
  height: 100%;
}
.head ul{
  padding: 0;
  margin: 0;
  display: inline-block;
  line-height: 80px;
  margin-left: 40px;
}
.head ul li{
  list-style: none;
  float: left;
  width: 80px;
  text-align: center;
}
.head ul a.active{
  color: red;
}
.head .land{
  float: right;
  font-size: 16px;
}
.head .land .border{
  height: 12px;
  width: 0px;
  border: 1px solid;
  margin-top: 5px;
}
.head .land div{
  width: 60px;
  float: left;
  text-align: center;
}

</style>
