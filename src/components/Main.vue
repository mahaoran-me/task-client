<template>
  <div class="main">
    <div class="left">
      <div class="head">
        <el-input placeholder="添加任务"></el-input>
      </div>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="待完成" name="1">
          <Task></Task>
          <Task></Task>
        </el-collapse-item>
        <el-collapse-item title="已完成" name="2">
          <Task></Task>
          <Task></Task>
        </el-collapse-item>
        <el-collapse-item title="已过期" name="3">
          <Task></Task>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script>
import Task from "@/components/Task";
export default {
  name: "MyMain",
  components: {Task},
  data() {
    return {
      activeNames: ['1', '2'],
      items: [
        {time: '1029', title: 'mafhafka', level: '1'},
        {time: '1029', title: 'mafhafka', level: '1'},
        {time: '1029', title: 'mafhafka', level: '1'},
      ]
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  //background-color: #333333;
  display: flex;

  .left {
    //background-color: red;
    margin-right: 5px;
    flex: 3;

    .head {
      padding: 5px;
      margin: 10px 0 20px 0;
    }
  }

  .right {
    background-color: #409eff;
    padding-left: 5px;
    flex: 2;
  }
}
</style>