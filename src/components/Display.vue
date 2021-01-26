<template>
  <div class="display">

  </div>
</template>

<script>
export default {
  name: "Display",
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
.display {
  padding: 10px;

  .head {
    height: 50px;
    display: flex;
  }
}
</style>