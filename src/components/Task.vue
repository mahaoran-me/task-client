<template>
  <div class="task">
    <div class="left">
      <i class="el-icon-circle-check" style="color: red"></i>
      <b>这是一个标题</b>
    </div>
    <div class="right">
      <i>2020.01.23</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  data() {
    return {
      task: {
        id: Number,
        title: '',
        content: '',
        level: Number,
        startTime: Date,
        endTime: Date,
        doneTime: Date,
        deleted: Boolean
      }
    }
  }
}
</script>

<style lang="less" scoped>
.task {
  height: 44px;
  border-radius: 5px;
  background-color: #e3e3e3;
  transition: background-color .25s;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #ecf5ff;
  }

  i {
    margin-left: 10px;
    margin-right: 10px;
  }

  .left {

  }

  .right {

  }
}
</style>