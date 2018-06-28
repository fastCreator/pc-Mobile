<template>
    <el-container class="page">
      <el-header height="30px">
        <nav-top></nav-top>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <nav-left></nav-left>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="less">
*{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
html,
body {
  width: 100;
  height: 100%;
  // overflow: hidden;
  margin: 0;
  padding: 0;
}
.page {
  height: 100%;
  .el-header {
    height: 30px;
    background: #fff;
  }
  > .el-container {
    background: #e5e9f2;
    height: 100%;
    box-sizing: border-box;
    > .el-main {
      padding: 0;
      margin: 10px;
      background: #fff;
      border: 1px solid #d1dbe5;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
      height: calc(~"100% - 20px");
      box-sizing: border-box;
      > .el-container{
        >.el-header{
          padding: 0;
        }
        >.el-main{
          border-top:6px solid #E5E9F2;
        }
      }
    }
  }
}
</style>
