<template>
  <div class="home">
    <Header></Header>
    <el-container class="content">
      <Menu></Menu>
      <el-container>
        <el-main>
          <el-card><Bread></Bread></el-card>
          <div class="main">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer><Footer></Footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './common/Header.vue'
import Footer from './common/Footer.vue'
import Menu from './common/Menu.vue'
import Bread from './Breadcrumb.vue'

export default {
  components: {
    Header,
    Footer,
    Menu,
    Bread,
  },
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    .main {
      margin: 12px;
    }
  }
}
</style>
