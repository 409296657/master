<template lang="html">
  <div class="list">
    <ul>
      <li v-for="(item,index) in items" :class="{active:index==isActive}"><router-link :to="{ name: item.name}">{{item.message}}</router-link></li>
    </ul>
  </div>


</template>

<script>
export default {
  name:'list',
  props:['isActive'],
  data(){
    return{
      items:[
        {name:'userinfo',message:'我的信息'},
        {name:'resetpwd',message:'修改密码'},
        {name:'mynote',message:'我的帖子'},
        {name:'mycollection',message:'我的收藏'},
        {name:'mymessage',message:'我的消息'},
        {name:'mytask',message:'我的任务'},
      ]
    }
  },
  methods:{

  },
  mounted(){

  }
}
</script>


<style>
.list  li{
  width: 135px;
  height: 60px;
  border-bottom: 1px solid #666;
  margin: 0 auto;
  text-align: center;
  line-height: 60px;
  list-style: none;
}
.list li.active a{
  color: red;
}
.list li a{
  text-decoration: none;
  color: #666;
}


</style>
