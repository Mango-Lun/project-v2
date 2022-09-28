<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form">
        <el-form-item
          label="用户名"
          prop="username"
          :rules="[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 4, max: 12, message: '长度在4-12位字符', trigger: 'blur' },
          ]"
        >
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :rules="[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在6-12位字符', trigger: 'blur' },
          ]"
        >
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
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login(form) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log(this.form);
          this.axios
            .post("https://rapserver.sunmi.com/app/mock/340/login", this.form)
            .then((res) => {
              console.log(res);
              if (res.data.status === 200) {
                localStorage.setItem("username", res.data.usernamee);
                this.$message({ message: res.data.message, type: "success" });
                this.$router.push("/home");
              }
            })
            .catch((err) => {
              console.error(err);
            });
        } else {
          console.error(this.form);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  .box-card {
    width: 450px;
    margin: 200px auto;
    .clearfix {
      font-size: 34px;
    }
    .btn-login {
      width: 100%;
    }
  }
}
</style>
