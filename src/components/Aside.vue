<template>
  <el-menu class="menu" :collapse="isCollapsed" router>
    <el-menu-item index="/home/today">
      <i class="el-icon-collection-tag"></i>
      <span>今日任务</span>
    </el-menu-item>
    <el-menu-item index="/home/week">
      <i class="el-icon-date"></i>
      <span>本周任务</span>
    </el-menu-item>
    <el-menu-item index="/home/mouth">
      <i class="el-icon-date"></i>
      <span>本月任务</span>
    </el-menu-item>
    <el-menu-item index="/home/finished">
      <i class="el-icon-finished"></i>
      <span>已完成</span>
    </el-menu-item>
    <el-menu-item index="/home/timeout">
      <i class="el-icon-warning-outline"></i>
      <span>已过期</span>
    </el-menu-item>
    <el-menu-item index="/home/deleted">
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