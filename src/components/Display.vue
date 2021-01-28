<template>
  <div class="display">
    <el-input v-model="task.title"></el-input>
    <el-progress :percentage="percentage"></el-progress>
    <div class="tag">
      <el-tag>{{ task.finished ? '已完成' : '未完成' }}</el-tag>
      <el-tag>{{ task.timeout ? '已过期' : '未过期' }}</el-tag>
      <el-tag>{{ task.deleted ? '已删除' : '未删除' }}</el-tag>
      <el-button :type="finishedColor" circle size="small" @click="task.finished = !task.finished"><i class="el-icon-check"></i></el-button>
      <el-dropdown trigger="click" @command="changeLevel">
        <el-button :type="color" circle size="small"><i class="el-icon-collection-tag"></i></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="1">一般</el-dropdown-item>
          <el-dropdown-item command="2">重要</el-dropdown-item>
          <el-dropdown-item command="3">紧急</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button type="danger" circle size="small"><i class="el-icon-delete"></i></el-button>
    </div>
    <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 20}"
        v-model="task.content">
    </el-input>
  </div>
</template>

<script>
export default {
  name: "Display",
  data() {
    return {
    }
  },
  props: {
    task: Object
  },
  computed: {
    color: function () {
      if (this.task.level === 1) return 'success';
      if (this.task.level === 2) return 'warning';
      return 'danger'
    },
    finishedColor: function () {
      return this.task.finished ? 'success' : 'info'
    },
    percentage: function () {
      if (this.task.timeout) return 100;
      const startTime = this.task.startTime.getTime();
      const endTime = this.task.endTime.getTime() + 10000;
      const now = new Date().getTime();
      return ((now - startTime) / (endTime - startTime)) * 100
    }
  },
  methods: {
    changeLevel(level) {
      this.task.level = parseInt(level)
    }
  }
}
</script>

<style lang="less" scoped>
.display {
  padding: 10px;

  .el-input {
    /deep/ input {
      color: #333333;
      font-size: 23px;
      font-weight: bold;
      background-color: transparent;
      border-radius: 0;
      border: none;
      text-align: center;
    }
  }

  .el-textarea {
    /deep/ textarea {
      color: #333333;
      background-color: transparent;
      border-radius: 0;
      border: none;
      text-align: left;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      font-size: unset;
    }
  }

  .tag {
    display: flex;
    padding: 20px;
    justify-content: space-around;
    line-height: normal;
  }

  p {
    text-align: left;
  }
}
</style>