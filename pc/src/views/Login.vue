<template>
  <div class="login">
    <div class="logo"><img src="../assets/logo.png"></div>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="form">
      <div class="title">智营销平台</div>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm2.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm2: {
        username: '',
        pass: ''
      },
      rules2: {
        username: [
          { trigger: 'blur', required: true, message: '年龄不能为空' }
        ],
        pass: [{ trigger: 'blur', required: true, message: '年龄不能为空' }]
      }
    }
  },
  created () {},
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$server.login('xwjc2018', 'aa', (data) => {
            this.$store.commit('setUser', 10)
            this.$router.push('/a/b')
          })
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="less">
.login {
  position:fixed;
  width:100%;
  height:100%;
  background: url(../assets/bg_login.png) repeat;
  .logo {
    padding: 18px;
    img {
      width: 100px;
    }
  }
  .form{
    margin: auto;
    width: 500px;
    margin-top: 100px;
    padding:14px 14px 10px;
    background: #fff;
    border-radius: 10px;
    .title{
      font-size: 20px;
      margin-bottom: 10px;
      width: 100%;
      text-align: center;
    }
    .el-button{
      width:194px;
    }
  }
}
</style>
