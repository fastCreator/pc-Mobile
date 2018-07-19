<template>
  <el-container class="pagee">
  <el-aside width="300px">
    门店<el-select></el-select>
    <div class="c1">
      <el-button style="width:100%;" type="primary">新增</el-button>
      <div v-for="(it,i) in list" :key="i" class="listitem">
        {{it}}
      <i class="el-icon-edit"></i>
      <i class="el-icon-delete"></i>
      </div>
    </div>
  </el-aside>
  <el-container> 
    <el-main>
      <div class="title">名称:<el-input v-model="title"/></div>
      <div class="selection" v-for="(it,i) in selection" :key="i">
          <span style="margin-right:6px;">{{it.label}}</span>
          <el-time-picker
            is-range
            v-model="it.time"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围">
          </el-time-picker>
          <el-switch
            v-model="it.work"
            active-text="休息"
            inactive-text="上班">
          </el-switch>
          <el-switch
          v-model="it.open"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="开启"
          inactive-text="关闭">
        </el-switch>
      </div>
       <el-date-picker
        style="margin-top:10px;"
          v-model="value1"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
         <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;" >
           <th>
             <td v-for="(it,i) in ['一','二','三','四','五','六','日']" :key="i">{{it}}</td>
           </th>
           <tr v-for="(tr,i) in tr" :key="i">
              <td v-for="(td,j) in td" :key="j">
                <div>{{i*7+j}}</div>
                 <el-select size="mini" v-model="value" placeholder="请排班">
                <el-option
                  v-for="item in ['休','早','中','晚']"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
                <div>8:00-10:00</div>
              </td>
           </tr>
         </table>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
export default {
  data () {
    return {
      title: '',
      time: [],
      date: null,
      list: ['这是标题一', '这是标题二', '这是标题三', '这是标题四'],
      selection: [
        {
          label: '早',
          time: [],
          work: true,
          open: true
        },
        {
          label: '中',
          time: [],
          work: true,
          open: true
        },
        {
          label: '晚',
          time: [],
          work: true,
          open: true
        }
      ],
      tr: new Array(5).fill(0).map((it, i) => i),
      td: new Array(7).fill(0).map((it, i) => i)
    }
  }
}
</script>
<style lang="less">
.pagee {
  .el-aside {
    padding: 20px;
  }
  .c1 {
    border-radius: 4px;
    i {
      float: right;
      margin-left: 5px;
      margin-top: 3px;
      cursor: pointer;
    }
    .listitem {
      border-bottom: 1px solid #ccc;
      padding: 8px;
    }
    margin-top: 14px;
    border: 1px solid #ccc;
    height: 600px;
    overflow: auto;
    .el-input {
      display: inline;
    }
  }
  .title {
    margin-bottom: 10px;
  }
  .el-switch {
    margin-left: 20px;
  }
  table {
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    .el-select {
      margin: 5px 0;
    }
    .el-select,
    .el-input {
      width: 100px;
    }
    tr{
      border-bottom:1px solid #ccc;
    }
    th td {
      padding: 0 5px;
      display: inline-block;
      height: 20px;
      background: #ccc;
      width: 100px;
      border-right: 1px solid #ccc;
      text-align: center;
    }
    tr td {
      padding: 0 5px;
      display: inline-block;
      height: 80px;
      width: 100px;
      border-right: 1px solid #ccc;
      text-align: center;
    }
  }
}
</style>
