<template>
  <div class="navTop">
        1231231
        <el-button @click="logout">退出登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'navTop',
  props: {
    list: {}
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    logout () {
      window.server.logout(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
<style lang="less">
.navTop {
  ul {
    list-style-type: none;
  }
}
</style>
