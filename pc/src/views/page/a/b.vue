<template>
  <el-container>
    <el-header height="70px">
      <op-list :list="list"></op-list>
    </el-header>
    <el-main>Main</el-main>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          label: '标题一',
          img: './list/test.png'
        },
        {
          label: '标题一',
          img: './list/test.png'
        }
      ]
    }
  },
  created () {},
  methods: {}
}
</script>
<style lang="less">
.opList {
  ul {
    list-style-type: none;
  }
}
</style>
