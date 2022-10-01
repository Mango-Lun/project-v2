<template>
  <div class="menu">
    <el-menu
      router
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#323131"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <div v-for="(item, index) in menu" v-if="!item.hidden">
        <el-submenu :index="index + ''" :key="index">
          <template slot="title">
            <i :class="item.iconClass" style="margin-right: 4px"></i>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group
            v-for="(child, index) in item.children"
            :key="index"
          >
            <!-- <i :class="child.iconClass"></i> -->
            <el-menu-item :index="child.path">{{ child.name }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [],
    }
  },
  created() {
    // console.log(this.$router.options.routes)
    this.menu = [...this.$router.options.routes]
    // this.menu = this.$router.options.routes
    // console.log(this.menu)
  },
}
</script>

<style lang="scss">
.menu {
  // .el-aside {
  //   height: 100%;
  //   .el-menu {
  //     height: 100%;
  //   }
  //   .el.
  // }
  .el-menu {
    width: 200px;
    height: 100%;
    color: #fff;
    .el-menu-item-group__title {
      padding: 0;
    }
    .el-submenu .el-menu-item-group .el-menu-item {
      padding-left: 85px !important;
    }
  }
}
</style>
