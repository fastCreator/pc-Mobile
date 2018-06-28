<template>
  <div class="navLeft">
    <el-menu :default-active="active" @select="select" class="el-menu-vertical-demo">
      <template v-for="(c,i) in nav">
        <el-submenu v-if="c.children && c.children.length" :index="c.name" :key="i">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{c.label}}</span>
          </template>
          <el-menu-item v-for="(it,i) in c.children" :index="`/${c.name}/${it.name}`" :key="i">{{it.label}}</el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="'/'+c.name" :key="i">
          <i class="el-icon-setting"></i>
          <span slot="title">{{c.label}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import nav from '../nav.js'
export default {
  name: 'navLeft',
  props: {
    msg: String
  },
  data () {
    return {
      nav: [],
      active: this.$route.path
    }
  },
  created () {
    this.nav = nav
  },
  methods: {
    select (index) {
      this.$router.push({ path: index })
    }
  }
}
</script>
<style lang="less">
.navLeft {
  height: 100%;
  background: rgb(50, 64, 87);
  .el-menu {
    border-right: solid 0px #e6e6e6;
    li li,
    .el-menu-item,
    .el-submenu__title {
      background: rgb(50, 64, 87);
      color: #fff;
      height: 40px;
      line-height: 40px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .is-active {
      background: #20a0ff;
    }
  }
}
</style>
