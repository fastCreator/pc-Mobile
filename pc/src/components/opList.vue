<template>
  <div class="opList">
    <ul class="list">
      <li v-for="(it ,i) in list" :key="i" @click="select(it)">
        <img :src="it.img">
        <label>{{it.label}}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'opList',
  props: {
    list: {
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  created () {},
  methods: {
    select (it) {
      this.$emit('select', it)
    }
  }
}
</script>
<style lang="less">
.opList {
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    height: 70px;
    li {
      display: inline-block;
      width: 90px;
      text-align: center;
      padding: 6px;
      label {
        line-height: 30px;
        cursor: pointer;
      }
      img {
        cursor: pointer;
        width: 36px;
        height: 36px;
        margin: auto;
        display: block;
      }
    }
  }
}
</style>
