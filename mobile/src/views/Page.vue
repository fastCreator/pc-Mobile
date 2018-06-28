<template>
  <div class="page">
    <mt-header fixed :title="$route.meta.title">
      <mt-button slot="left" icon="back" @click="back"></mt-button>
    </mt-header>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  created () {},
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less">
.page {
  padding: 40px 0 0;
}
</style>
