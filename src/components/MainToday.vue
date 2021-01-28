<template>
  <div class="main">
    <div class="left">
      <div class="head">
        <el-input placeholder="添加任务" v-model="addTitle" @keyup.enter.native="addTask"></el-input>
      </div>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="待完成" name="unfinished">
          <Task v-for="task in unFinishedTasks" :task="task" :key="task.id" v-on:click="taskChange(task)"></Task>
        </el-collapse-item>
        <el-collapse-item title="已完成" name="finished">
          <Task v-for="task in finishedTasks" :task="task" :key="task.id" v-on:click="taskChange(task)"></Task>
        </el-collapse-item>
        <el-collapse-item title="已过期" name="timeout">
          <Task v-for="task in timeoutTasks" :task="task" :key="task.id" v-on:click="taskChange(task)"></Task>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="right">
      <Display :task="currentTask"></Display>
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
      tasks: [],
      currentTask: null,
      addTitle: null
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.axios.get('/api/task/today')
          .then((response) => {
            response.data.forEach(task => {
              task.startTime = new Date(task.startTime)
              task.endTime = new Date(task.endTime)
              task.doneTime = task.doneTime === null ? null : new Date(task.doneTime)
            })
            this.tasks = response.data;
          })
    },
    taskChange(task) {
      this.currentTask = task;
    },
    addTask() {
      const title = this.addTitle;
      this.addTitle = '';
      this.axios.post('/api/task/create', {
        limit: 'today',
        title: title
      }).then(response => {
        if (response.data.code === 1) {
          this.$message.success(response.data.message);
          this.loadData();
        } else {
          this.$message.error(response.data.message);
        }
      })
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