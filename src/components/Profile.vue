<template>
  <div class="profile">
    <el-avatar :size="75" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    <br>
    <span><b>马昊然</b></span>
    <br>
    <span>mahaoran@gmail.com</span>
    <br>
    <el-button size="small" plain round>编辑个人信息<i class="el-icon-edit"></i></el-button>
    <el-divider></el-divider>
    <div class="item">
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="warning" icon="el-icon-share" circle></el-button>
      <el-button type="info" icon="el-icon-setting" circle></el-button>
    </div>
    <el-divider></el-divider>
    <el-button size="small" plain @click="logout">退出登录</el-button>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      model: false
    }
  },
  methods: {
    logout() {
      this.axios.get("/api/logout")
          .then((response) => {
            if (response.data.code === 0) {
              this.$message.error(response.data.message);
              return false;
            } else {
              this.$message.success(response.data.message);
              this.$router.push('/login');
            }
          });
    }
  }
}
</script>

<style lang="less" scoped>
.profile {
  text-align: center;
  line-height: 1.8rem;

  .el-button {
    margin: 8px;
  }

  .el-divider {
    margin: 0;
  }
}
</style>