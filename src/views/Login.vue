<template>
  <div class="page">
    <div class="box">
      <h2>欢迎登录Task</h2>
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <div class="flex-left">
          <el-button type="primary" @click="onSubmit">立即登录</el-button>
        </div>
        <div class="flex-right">
          <el-link type="primary" href="register">没有账号？立即注册</el-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
        password: [{required: true, message: '密码不能为空', trigger: 'blur'}]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          this.$message.error("请检查表单格式");
        } else {
          const params = new URLSearchParams();
          params.append('username', this.form.username);
          params.append('password', this.form.password);
          this.axios.post('/api/login', params)
              .then((response) => {
                if (response.data.code === 0) {
                  this.$message.error(response.data.message);
                  return false;
                } else {
                  this.$message.success(response.data.message);
                  this.$router.push('/home/today');
                }
              });
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/background.png");
  background-repeat: no-repeat;
  background-size: cover;

  .box {
    width: 300px;
    height: auto;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.85);
    padding: 50px;

    .el-input {
      /deep/ input {
        background-color: transparent;
        border-radius: 0;
        border: 2px none #409eff;
        border-bottom-style: solid;
      }
    }

    .flex-left {
      display: flex;
      margin-top: 30px;
      margin-bottom: 10px;
    }

    .flex-right {
      display: flex;
      margin-bottom: 10px;
      justify-content: flex-end;
    }
  }
}
</style>