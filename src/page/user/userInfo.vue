<template lang="html">
  <div class="userInfo">
    <el-container>
      <el-header height="80px"><Head isActive="-1"></Head></el-header>
      <el-container class="border">
        <el-aside width="180px">
          <List isActive="0"></List>
        </el-aside>
        <el-main>
          <div class="content">
            <ul>
              <li class="title">个人信息</li>
              <li class="upload">
                <img src="" alt="DC8B19B5BD6447A56146B8BB09E85BCC.jpg">
                <el-upload
                  class="avatar-uploader"
                  action="http://www.ftusix.com/static/data/upload.php"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </li>
              <li><span>注册手机号</span>{{mobile}}</li>
              <li><span>昵称</span><el-input type="text" :value="this.common.getCookie('useInfo').nick_name"></el-input></li>
              <li><span>性别</span>男<input type="radio" v-model="sex" name="sex" value="0">女<input type="radio" v-model="sex" name="sex" value="1"></li>
            </ul>
            <el-button type="primary">提交</el-button>
          </div>
        </el-main>
      </el-container>
     </el-container>
   <el-footer></el-footer>
  </div>





</template>

<script>
import Head from '@/components/common/Head'
import List from '@/components/user/list'
export default {
  name:'userInfo',
  components:{
    Head,
    List
  },
  data(){
    return{
      sex:'',
      mobile:this.common.getCookie('useInfo').mobile,
      imageUrl: '',
    }
  },
  methods:{
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  },
}
</script>


<style>
.userInfo .el-container{
    width: 1000px;
    margin: 0 auto;
}
.userInfo .el-container.border{
  border-top: 1px solid #666;
}
.userInfo .el-header{
  padding: 0;
}
.userInfo .el-main{
  padding: 0;
}
.userInfo .el-aside{
  border-right: 1px solid #666;
  height: 500px;
  margin-top: 10px;
}
.userInfo .el-main{
  margin-top: 10px;
  padding:0 20px;
}
.userInfo .el-main .content li{
  list-style: none;
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid #666;
  box-sizing: border-box;
}
.userInfo .el-main .content li .el-input{
  display: inline-block;
  width: 250px;
}
.userInfo .el-main .content ul{
  margin-bottom: 50px;
}
.userInfo .el-main .content li.title{
  height: 40px;
  line-height: 40px;
}
.userInfo .el-main .content li span{
  display: inline-block;
  width: 100px;
}
.userInfo .el-main .content li.upload{
  padding-top:8px;
}
.userInfo .el-main .content li.upload img{
  float: left;
  overflow: hidden;
}
.userInfo .avatar-uploader{
  height: 100%;
}
.userInfo .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 60px;
    line-height: 60px;
  }
  .userInfo .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .userInfo .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .userInfo .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
</style>
