<template>
  <div class="home">
    <mt-header fixed :title="$route.meta.title"></mt-header>
    <router-view/>
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item v-for="(it ,i) in navs" :key="i" :id="it.name">
        <img slot="icon" :src="`./nav/${it.name+(selected===it.name?'_fill':'')}.png`"> {{it.meta.title}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import nav from '../nav'
export default {
  data () {
    return {
      navs: nav[0].children,
      selected: nav[0].children[0].name
    }
  },
  watch: {
    selected (v) {
      this.$router.replace(`/home/${v}`)
    }
  },
  created () {
    console.log(this)
  },
  methods: {
  }
}
</script>
<style lang="less">
/*
 未选中颜色：#333
 选中颜色:#26a2ff
 大小48px图片
*/
.home {
  color: #333;
  padding: 40px 0 55px;
  .mint-tabbar{
  }
}
</style>
