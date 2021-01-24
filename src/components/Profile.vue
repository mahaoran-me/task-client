<template>
  <div class="profile">
    <el-avatar :size="75" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    <br>
    <span><b>马昊然</b></span>
    <br>
    <span>mahaoran@gmail.com</span>
    <br>
    <el-button size="small" plain round>编辑个人信息<i class="el-icon-edit"></i></el-button>
    <hr>
    <div class="item">
      个人偏好设置
    </div>
    <hr>
    <div class="item">
      帮助与反馈
    </div>
    <hr>
    <el-button size="small" plain>退出登录</el-button>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style lang="less" scoped>
.profile {
  text-align: center;
  line-height: 1.8rem;

  .el-button {
    margin: 8px;
  }

  hr {
    border: 0.5px #E4E7ED solid;
    margin: 0;
  }

  .item {
    transition: background-color .2s;
  }

  .item:hover {
    background-color: #e9eef3;
    cursor: pointer;
  }
}
</style>