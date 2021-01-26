<template>
  <el-menu class="menu" :collapse="isCollapsed" default-active="1" >
    <el-menu-item index="1">
      <i class="el-icon-collection-tag"></i>
      <span>今日任务</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-date"></i>
      <span>本周任务</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-date"></i>
      <span>本月任务</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-finished"></i>
      <span>已完成</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-warning-outline"></i>
      <span>已过期</span>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="el-icon-delete"></i>
      <span>回收站</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {

    }
  },
  props: {
    isCollapsed: Boolean
  }
}
</script>

<style lang="less" scoped>
.menu {
  border: 0;
}
.menu:not(.el-menu--collapse) {
  width: 250px;
}
</style>