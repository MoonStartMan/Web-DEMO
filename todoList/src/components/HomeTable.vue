<template>
  <div id="home-table">
    <div class="table-title">表单预览</div>
    <div class="top-select" v-if="tableShow">
      <div class="top-select-text">类型</div>
      <div class="top-select-list">
        <el-select v-model="selectValue" placeholder="请选择">
          <el-option
            v-for="item in selectOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="top-table" v-if="tableShow">
      <div class="table-title">表单预览</div>
      <div class="top-table-list">
        <el-table :data="tableData" border>
          <el-table-column fixed prop="date" label="#" width="50">
          </el-table-column>
          <el-table-column prop="name" label="类型" width="80">
          </el-table-column>
          <el-table-column prop="type" label="名称" width="80">
          </el-table-column>
          <el-table-column prop="dom" label="label" width="80">
          </el-table-column>
          <el-table-column prop="placeholder" label="placeholder" width="80">
          </el-table-column>
          <el-table-column prop="options" label="options" width="80">
          </el-table-column>
          <el-table-column prop="thead" label="thead" width="80">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="danger"
                size="small"
                >删除</el-button
              >
              <el-button type="primary" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="btn-box">
        <el-button type="primary" v-if="tableShow">+ 添加</el-button>
    </div>
    <div class="btn-box center">
        <el-button type="primary" v-if="tableShow">看一看</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //  显示列表
      tableShow: false,
      //  选项列表
      selectOptions: [
        {
          value: "form",
          label: "form",
        },
      ],
      selectValue: "", //  选择的值
      tableData: [],
        // {
        //   date: "1",
        //   name: "select",
        //   type: "type",
        //   dom: "label",
        //   placeholder: "请输入类型",
        //   options: "值:div,label,div",
        //   thead: " "
        // },
        // {
        //   date: "2",
        //   name: "select",
        //   type: "type",
        //   dom: "label",
        //   placeholder: "请输入类型",
        //   options: "值:div,label,div",
        //   thead: ""
        // },
    };
  },
  props: ["jsonValue"],
  watch: {
      jsonValue(value, oldValue) {
        if (value) {
          this.tableShow = true
        } else {
          this.tableShow = false
        }
        let data = value
        var page = eval("("+data+")")
        this.tableData = page
      }
  }
};
</script>

<style lang="less">
#home-table {
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
  border-radius: 1rem;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  padding: 1.25rem;
  .table-title {
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    color: #000000;
    margin: 0.625rem auto;
  }
  .top-select {
    width: 100%;
    height: 3.125rem;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    .top-select-text {
      font-size: 1rem;
      color: #1a1a1a;
    }
    .top-select-list {
      width: 75%;
      height: 2rem;
      .el-select {
        width: 100%;
        height: 100%;
      }
    }
  }
  .top-table {
    width: 100%;
    .top-table-list {
      width: 100%;
      .el-table {
          width: 100%;
      }
    }
  }
  .btn-box {
    width: 100%;
    margin: .625rem auto;
  }
  .btn-box.center {
      display: flex;
      display: -webkit-flex;
      align-items: center;
      justify-content: center;
  }
}
</style>
