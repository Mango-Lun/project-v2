<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-button class="btn-login" type="primary" @click="login(form)"
          >登陆</el-button
        >
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { nameRule, passwordRule } from '../utils/validate'
import { setToken } from '../utils/setToken'
import { login } from '../api/api'
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [{ validator: nameRule, trriger: 'blur' }],
        password: [{ validator: passwordRule, trriger: 'blur' }],
      },
    }
  },
  methods: {
    login(form) {
      // this.service.post('login', this.form).then((res) => {
      //   // console.log(res)
      //   if (res.data.status === 200) {
      //     setToken('username', res.data.username)
      //     setToken('token', res.data.token)
      //     this.$message({ message: res.data.message, type: 'success' })
      //     this.$router.push('/home')
      //   }
      // })
      login(form).then((res) => {
        if (res.data.status === 200) {
          setToken('username', res.data.username)
          setToken('token', res.data.token)
          this.$message({ message: res.data.message, type: 'success' })
          this.$router.push('/home')
        }
      })
    },
  },
}
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url('../assets/bg.jpg') no-repeat center;
  background-size: cover;
  .box-card {
    width: 450px;
    margin: 200px auto;
    background: #65768557;
    color: #fff;
    .el-form .el-form-item__label {
      color: #fff;
    }
    .clearfix {
      font-size: 34px;
    }
    .btn-login {
      width: 100%;
    }
  }
}
</style>
