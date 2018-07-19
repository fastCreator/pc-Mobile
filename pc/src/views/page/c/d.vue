<template>
  <div class="kqgl">
      <ul class="filterOption">
        <li>
          <label>门店:</label>
          <el-select>
              <el-option
                v-for="item in mendian"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
          </el-select>
        </li>
        <li>
          <label>姓名:</label>
          <el-input/>
        </li>
        <li>
          <label>年月:</label>
           <el-date-picker
            v-model="month"
            type="month"
            placeholder="选择月">
          </el-date-picker>
        </li>
        <li>
          <label>卡号:</label>
          <el-input/>
        </li>
        <li>
          <el-button type="primary">查询</el-button>
          <el-button type="primary" @click="add()">新增</el-button>
        </li>
      </ul>
    <div class="mainTable">
        <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="门店"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="拼音">
    </el-table-column>
    <el-table-column
      prop="address"
      label="上班时">
    </el-table-column>
    <el-table-column
      prop="address"
      label="下班时">
    </el-table-column>
  </el-table>
    </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      month: null,
      mendian: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
    }
  },
  created () { },
  methods: {
    add () {
      this.$route.push()
    }
  }
}
</script>
<style lang="less">
.kqgl {
}
</style>
