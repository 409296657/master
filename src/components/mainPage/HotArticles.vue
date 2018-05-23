<template lang="html">
  <div class="HotArticles">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="item.label" :name="item.name" v-for="(item,index) in items" :key="index">
        <div class="content">
          <ul>
            <li v-for="(list,index) in item.lists" :key="index">
              <div class="list">
                <div class="text">
                  <h3><router-link :to="{ name: ''}">{{list.username}}</router-link>&nbsp;&nbsp;·&nbsp;&nbsp;<router-link :to="{ name: ''}">{{list.time}}</router-link>&nbsp;&nbsp;·&nbsp;&nbsp;<router-link :to="{ name: ''}">{{list.type}}</router-link></h3>
                  <h2><router-link :to="{ name: ''}">{{list.title}}</router-link></h2>
                </div>
                <div class="icon">
                  <img src="../../images/comment.jpg" @click="list.commentNum+=1"><span>{{list.commentNum}}</span>
                  <img src="../../images/thumb.jpg"  @click="list.thumbNum+=1"><span>{{list.thumbNum}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>


</template>

<script>
export default {
  name:'HotArticles',
  data(){
    return{
      activeName: 'second',
      items:[
        {
          label:"热门文章",
          name:"first",
          lists:[
            {
              username:"铃木风听",
              time:"2小时前",
              type:"成果分享",
              title:"Python+flash+SQLAIchemy半年自学，跳槽成功",
              commentNum:0,
              thumbNum:0,
            },{
              username:"铃木风听",
              time:"2小时前",
              type:"成果分享",
              title:"Python+flash+SQLAIchemy半年自学，跳槽成功",
              commentNum:0,
              thumbNum:0,
            },{
              username:"铃木风听",
              time:"2小时前",
              type:"成果分享",
              title:"Python+flash+SQLAIchemy半年自学，跳槽成功",
              commentNum:0,
              thumbNum:0,
            },
          ]
        },{
          label:"推荐",
          name:"second",
          lists:[
            {
              username:"铃木风听",
              time:"2小时前",
              type:"成果分享",
              title:"Python+flash+SQLAIchemy半年自学，跳槽成功",
              commentNum:0,
              thumbNum:0,
            },{
              username:"铃木风听",
              time:"2小时前",
              type:"成果分享",
              title:"Python+flash+SQLAIchemy半年自学，跳槽成功",
              commentNum:0,
              thumbNum:0,
            },{
              username:"铃木风听",
              time:"2小时前",
              type:"成果分享",
              title:"Python+flash+SQLAIchemy半年自学，跳槽成功",
              commentNum:0,
              thumbNum:0,
            },
          ]
        },{
          label:"php",
          name:"thied",
          lists:[
            {
              username:"铃木风听",
              time:"2小时前",
              type:"成果分享",
              title:"Python+flash+SQLAIchemy半年自学，跳槽成功",
              commentNum:0,
              thumbNum:0,
            },{
              username:"铃木风听",
              time:"2小时前",
              type:"成果分享",
              title:"Python+flash+SQLAIchemy半年自学，跳槽成功",
              commentNum:0,
              thumbNum:0,
            },{
              username:"铃木风听",
              time:"2小时前",
              type:"成果分享",
              title:"Python+flash+SQLAIchemy半年自学，跳槽成功",
              commentNum:0,
              thumbNum:0,
            },
          ]
        },{
          label:"ios",
          name:"fourth",
          lists:[
            {
              username:"铃木风听",
              time:"2小时前",
              type:"成果分享",
              title:"Python+flash+SQLAIchemy半年自学，跳槽成功",
              commentNum:0,
              thumbNum:0,
            },{
              username:"铃木风听",
              time:"2小时前",
              type:"成果分享",
              title:"Python+flash+SQLAIchemy半年自学，跳槽成功",
              commentNum:0,
              thumbNum:0,
            },{
              username:"铃木风听",
              time:"2小时前",
              type:"成果分享",
              title:"Python+flash+SQLAIchemy半年自学，跳槽成功",
              commentNum:0,
              thumbNum:0,
            },
          ]
        },{
          label:"python",
          name:"fifth",
          lists:[
            {
              username:"铃木风听",
              time:"2小时前",
              type:"成果分享",
              title:"Python+flash+SQLAIchemy半年自学，跳槽成功",
              commentNum:0,
              thumbNum:0,
            },{
              username:"铃木风听",
              time:"2小时前",
              type:"成果分享",
              title:"Python+flash+SQLAIchemy半年自学，跳槽成功",
              commentNum:0,
              thumbNum:0,
            },{
              username:"铃木风听",
              time:"2小时前",
              type:"成果分享",
              title:"Python+flash+SQLAIchemy半年自学，跳槽成功",
              commentNum:0,
              thumbNum:0,
            },
          ]
        },{
          label:"java",
          name:"sixth",
          lists:[
            {
              username:"铃木风听",
              time:"2小时前",
              type:"成果分享",
              title:"Python+flash+SQLAIchemy半年自学，跳槽成功",
              commentNum:0,
              thumbNum:0,
            },{
              username:"铃木风听",
              time:"2小时前",
              type:"成果分享",
              title:"Python+flash+SQLAIchemy半年自学，跳槽成功",
              commentNum:0,
              thumbNum:0,
            },{
              username:"铃木风听",
              time:"2小时前",
              type:"成果分享",
              title:"Python+flash+SQLAIchemy半年自学，跳槽成功",
              commentNum:0,
              thumbNum:0,
            },
          ]
        },
      ]
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
.HotArticles .el-tabs__nav-scroll{
  padding: 0 25px;
  font-size: 20px;
  height: 70px;
  line-height: 70px;
  margin-top: 20px;
}
.HotArticles a{
  text-decoration: none;
  color: inherit;
}
.HotArticles li{
  list-style: none;
  border-bottom: 1px solid #e3e3e3;
}
.HotArticles .content li .list{
  height: 120px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.HotArticles .content li .list h3{
  font-size: 16px;
  font-weight: normal;
}
.HotArticles .content li .list h2{
  font-size: 18px;
  margin-top: 10px;
}
.HotArticles .content li .list .icon{
  display: flex;
  align-items: center;
}
.HotArticles .content li .list .icon img{
  cursor: pointer;
  margin-left: 30px;
}
.HotArticles .content li .list .icon span{
  margin-left: 10px;
  font-size: 20px;
}

</style>
