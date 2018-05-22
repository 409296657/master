<template lang="html">
  <div class="LearningPath">
    <el-menu v-for="(item,index) in items" v-bind:key="item.id"
      default-active="2"
      class="el-menu-vertical-demo"
      router
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title" :class="{active:show}" @click="show =!show">
          <span  :class="{active:show}" @click="show =!show">{{item.title}}</span>
        </template>
          <el-menu-item index="">第一部分：HTML基础<i class="el-submenu__icon-arrow el-icon-arrow-right"></i></el-menu-item>
        <template slot="title">
          <span>{{item.title}}</span>
        </template>
          <el-menu-item index="knowledgeCard">第一部分：HTML基础<i class="el-submenu__icon-arrow el-icon-arrow-right"></i></el-menu-item>
          <el-menu-item index="">1.1HTML基础<i class="el-submenu__icon-arrow el-icon-arrow-right"></i></el-menu-item>
          <el-menu-item index="">任务1：HTML基础<i class="el-submenu__icon-arrow el-icon-arrow-right"></i></el-menu-item>

      </el-submenu>
    </el-menu>
  </div>


</template>

<script>
export default {
  name:'LearningPath',
  data(){
    return{
      show:false,
      items:[
        {title:'步骤一：HTML基础',id:1,},
        {title:'步骤二：HTML基础',id:2,},
        {title:'步骤三：HTML基础',id:3,},
        {title:'步骤四：HTML基础',id:4,},
      ]
    }
  },
  methods: {
     handleOpen(key, keyPath) {
       console.log(key, keyPath);
     },
     handleClose(key, keyPath) {
       console.log(key, keyPath);
     },
  }
}
</script>


<style>
.LearningPath .active{
  background-color: #caf6e7 !important;
}
.el-submenu.is-opened div:first-child{
  background-color: #caf6e7;
}
.LearningPath .el-submenu__title span{
  display: inline-block;
  position: absolute;
  width: 100%;
  text-indent: 20px;
  margin: 0 -20px;
}
.LearningPath .el-submenu__title,.LearningPath .el-menu-item {
  font-size: 20px;
  height: 42px;
  width: 900px;
  line-height: 42px;
  margin: 10px 0 0 0;
  background-color: #ededed;
  padding:0 20px !important;
}
.LearningPath .el-submenu__title:hover{
  background-color: #d3d3d3;
}
.LearningPath .el-button{
  font-size: 20px;
  height: 42px;
  width: 900px;
  line-height: 42px;
  margin-top: 10px;
  background-color: #ededed;
  text-indent: 5px;
  border-radius: 0;
  padding: 0;
  text-align: left;
  color: inherit;
  box-sizing: border-box;
  border: none;
}
.LearningPath .el-menu-item:hover{
  background-color: #d3d3d3;
  border: none;
}


</style>
