<template>
  <div class="main">
    <div class="left">
      <div class="head">
        <el-input placeholder="添加任务"></el-input>
      </div>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="待完成" name="unfinished">
          <Task v-for="task in unFinishedTasks" :task="task" :key="task.id"></Task>
        </el-collapse-item>
        <el-collapse-item title="已完成" name="finished">
          <Task v-for="task in finishedTasks" :task="task" :key="task.id"></Task>
        </el-collapse-item>
        <el-collapse-item title="已过期" name="timeout">
          <Task v-for="task in timeoutTasks" :task="task" :key="task.id"></Task>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="right">
      <Display></Display>
    </div>
  </div>
</template>

<script>
import Display from "@/components/Display";
import Task from "@/components/Task";

export default {
  name: "MainToday",
  components: {Display, Task},
  data() {
    return {
      activeNames: ['unfinished', 'finished'],
      tasks: [
        {
          id: 1001,
          title: '这是一个标题',
          content: '这是内容',
          level: 1,
          finished: false,
          timeout: false,
          deleted: false,
          startTime: new Date(),
          endTime: new Date(),
          doneTime: new Date()
        },
        {
          id: 1002,
          title: '这是一个标题',
          content: '这是内容',
          level: 2,
          finished: false,
          timeout: false,
          deleted: false,
          startTime: new Date(),
          endTime: new Date(),
          doneTime: new Date()
        },
        {
          id: 1003,
          title: '这是一个标题',
          content: '这是内容',
          level: 2,
          finished: true,
          timeout: false,
          deleted: false,
          startTime: new Date(),
          endTime: new Date(),
          doneTime: new Date()
        },
        {
          id: 1004,
          title: '这是一个标题',
          content: '这是内容',
          level: 3,
          finished: true,
          timeout: false,
          deleted: false,
          startTime: new Date(),
          endTime: new Date(),
          doneTime: new Date()
        },
        {
          id: 1005,
          title: '这是一个标题',
          content: '这是内容',
          level: 2,
          finished: false,
          timeout: true,
          deleted: false,
          startTime: new Date(),
          endTime: new Date(),
          doneTime: new Date()
        }
      ]
    }
  },
  computed: {
    unFinishedTasks: function () {
      const tasks = [];
      this.tasks.forEach(t => {
        if (t.finished === false && t.timeout === false) {
          tasks.push(t);
        }
      })
      return tasks;
    },
    finishedTasks: function () {
      const tasks = [];
      this.tasks.forEach(t => {
        if (t.finished === true) {
          tasks.push(t);
        }
      })
      return tasks;
    },
    timeoutTasks: function () {
      const tasks = [];
      this.tasks.forEach(t => {
        if (t.finished === false && t.timeout === true) {
          tasks.push(t);
        }
      })
      return tasks;
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  display: flex;

  .left {
    padding: 20px;
    flex: 3;

    .head {
      padding: 5px;
      margin: 0 0 20px 0;
    }
  }

  .right {
    flex: 2;
    padding: 5px;
    border-left: 1px #e3e3e3 solid;
  }
}
</style>