<template>
  <el-container style="width: 100%; height: 100%">
    <el-header>
      <Header v-on:collapse-change="collapseChange"></Header>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <Aside :is-collapsed="isCollapsed"></Aside>
      </el-aside>
      <el-main>
        <MainToday></MainToday>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "@/components/Aside";
import Header from "@/components/Header";
import MainToday from "@/components/MainToday";

export default {
  name: "Home",
  components: {MainToday, Header, Aside},
  data() {
    return {
      isCollapsed: false
    }
  },
  methods: {
    collapseChange() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 60px;
  border-bottom: 1px #E4E7ED solid;
}

.el-aside {
  height: 100%;
  background-color: white;
  color: #333;
  border-right: 1px #e3e3e3 solid;
  //text-align: center;
}

.el-main {
  background-color: white;
  padding: 0;
  text-align: center;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>