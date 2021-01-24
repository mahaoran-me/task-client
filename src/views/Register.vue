<template>
  <div class="page">
    <div class="box">
      <h2>欢迎注册Task账号</h2>
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item prop="password2">
          <el-input type="password" v-model="form.password2" placeholder="请确认密码"/>
        </el-form-item>
        <el-form-item prop="phone">
          <el-input v-model="form.phone" placeholder="请输入手机号码"/>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="form.email" placeholder="请输入邮箱地址"/>
        </el-form-item>
        <div class="flex-left">
          <el-button type="primary" @click="onSubmit">立即注册</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        username: '',
        password: '',
        password2: '',
        phone: '',
        email: ''
      },
      rules: {
        username: [
          {required: true, message: '用户名不能为空', trigger: 'blur'},
          {min: 5, max: 15, message: '长度在 5 到 15 个字符之间', trigger: 'blur'}
        ],
        password: [{required: true, message: '密码不能为空', trigger: 'blur'}],
        password2: [{
          required: true, validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'))
            } else if (value !== this.form.password) {
              callback(new Error('两次输入密码不一致'))
            } else {
              callback()
            }
          }, trigger: 'blur'
        }],
        phone: [
          {required: true, message: '请输入手机号码', trigger: 'blur'},
          {min: 11, max: 11, message: '请输入正确的手机号码', trigger: ['blur', 'change']}
        ],
        email: [
          {required: true, message: '请输入邮箱地址', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ],
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          this.$message.error("请检查表单格式");
        } else {
          this.axios.post('http://localhost/api/register', this.form)
              .then((response) => {
                if (response.data.code === 0) {
                  this.$message.error(response.data.message);
                } else {
                  this.$message.success(response.data.message);
                  this.$router.push('/login');
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