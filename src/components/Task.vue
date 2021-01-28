<template>
  <div class="task" @click="onClick">
    <div class="left">
      <i :class="iconClass" @click="onClickIcon"></i>
      <b :class="{finished: task.finished}">{{ task.title }}</b>
    </div>
    <div class="right">
      <i>{{ task.endTime.getFullYear() + '-' + task.endTime.getMonth() + '-' + task.endTime.getDate() }}</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  data() {
    return {
    }
  },
  props: {
    task: Object
  },
  methods: {
    onClick() {
      this.$emit("click")
    },
    onClickIcon() {
      if (this.task.finished === false && this.task.timeout === false) {
        this.task.finished = true;
      } else if (this.task.finished === true && this.task.timeout === false) {
        this.task.finished = false;
      }
    }
  },
  computed: {
    iconClass: function () {
      return {
        normal: this.task.level === 1,
        important: this.task.level === 2,
        emergency: this.task.level === 3,
        'el-icon-circle-check': this.task.finished === false && this.task.timeout === false,
        'el-icon-success': this.task.finished === true && this.task.timeout === false,
        'el-icon-warning': this.task.timeout === true,
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

  .normal {
    color: #67C23A;
  }

  .important {
    color: #E6A23C;
  }

  .emergency {
    color: #F56C6C;
  }

  .finished {
    text-decoration:line-through;
  }

  .left {

  }

  .right {

  }
}
</style>