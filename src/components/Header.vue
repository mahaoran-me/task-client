<template>
  <div class="block">
    <div class="block-1">
      <el-button size="medium" circle @click="collapseChange"><i class="el-icon-s-fold"></i></el-button>
      <el-link :underline="false" href="#"><h1>Task</h1></el-link>
    </div>
    <div class="block-2">
      <div class="search">
        <el-input v-model="search" autosize placeholder="搜索任务">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <div class="block-3">
      <el-popover
          ref="profile"
          placement="top-start"
          width="250"
          trigger="click">
        <Profile></Profile>
      </el-popover>
      <el-avatar :src="avatarUrl" v-popover:profile></el-avatar>
    </div>
  </div>
</template>

<script>
import Profile from "@/components/Profile";
export default {
  name: "Header",
  components: {Profile},
  data() {
    return {
      search: '',
      avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    }
  },
  methods: {
    collapseChange() {
      this.$emit("collapse-change");
    }
  }
}
</script>

<style lang="less" scoped>
.block {
  height: 100%;
  display: flex;
  justify-content: space-between;

  .block-1 {
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 10px 0 10px;

    h1 {
      color: #409eff;
      margin: 0 0 0 120px;
    }
  }

  .block-2 {
    flex: auto;
    margin: 0 10px 0 50px;

    .search {
      width: 60%;
      min-width: 200px;
    }
  }

  .block-3 {
    width: auto;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin: 0 10px 0 10px;

    .el-avatar {
      transition: all .3s linear;
    }

    .el-avatar:hover, .el-avatar:focus{
      border: 1px solid;
      cursor: pointer;
    }
  }
}
</style>