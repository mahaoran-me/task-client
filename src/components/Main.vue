<template>
  <div class="main">
    <div class="left">
left
    </div>
    <div class="right">
right
    </div>
  </div>
</template>

<script>
export default {
name: "MyMain"
}
</script>

<style lang="less" scoped>
.main {
  display: flex;
  .left {
    width: 55%;
  }
  .right {
    width: 45%;
    border-left: 1px #E4E7ED solid;
  }
}
</style>