<template>
  <div>
    <div
      class="block"
      style="display: flex; align-items: center; height: 100px"
    >
      <el-date-picker
        v-model="action.date"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-mm-dd hh:mm:ss"
      >
      </el-date-picker>
      <el-select v-model="action.regin" placeholder="数据分层">
        <el-option value="dwd" label="dwd"></el-option>
        <el-option value="dws" label="dws"></el-option>
      </el-select>
      <el-input
        v-model="action.tablename"
        placeholder="输入表名"
        style="width: 300px"
      ></el-input>
      <el-input
        v-model="action.indicator"
        placeholder="输入指标"
        style="width: 300px"
      ></el-input>
      <el-input
        v-model="action.account"
        placeholder="输入负责人"
        style="width: 300px"
      ></el-input>
      <el-button type="success" @click="Search" round>搜索</el-button>
    </div>
    <el-table :data="currentTableData" max-height="100%" border style="width: 100%">
      <el-table-column
        prop="createtime"
        label="日期"
        width="190"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="active"
        label="数据分域"
        width="190"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="regin" label="数据分层" width="190" align="center">
      </el-table-column>
      <el-table-column
        prop="tablename"
        label="数据表名"
        width="190"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="indicator"
        label="指标名称"
        width="190"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="account" label="负责人" width="190" align="center">
      </el-table-column>
      <el-table-column label="操作" width="210" align="center">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row,scope.$index)"
            type="text"
            size="model"
            style=""
            >查看</el-button
          >
          <el-button type="text" size="model" @click="open(scope.row)"
            >编辑</el-button
          >
        </template>
      </el-table-column>

      <el-table-column label="行数">  
      <template slot-scope="scope">  
        <!-- scope.row 包含当前行的数据 -->  
        <!-- scope.$index 包含当前行的索引（行数，从0开始） -->  
       {{ scope.$index+1 }}
      </template>  
    </el-table-column>  
    </el-table>
    <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 50, 100, 200]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="200">
    </el-pagination>
  </div>
  </div>
</template>


<script>
import request from "@/utitl/axios";

export default {
  data() {
    return {
      tableData: [
        {
          active: "",
          regin: "",
          tablename: "",
          indicator: "",
          comment: "",
          owned: "",
          account: "",
          createtime: "",
        },
      ],
      currentTableData:[],
      action: {
        date: "",
        regin: "",
        tablename: "",
        indicator: "",
        comment: "",
        owned: "",
        account: "",
        myaccount: localStorage.getItem("account"),
      },
      currentPage: 1, // 当前页码  
      pageSize: 10, // 每页显示条目个数  
    };
  },
  methods: {
    async Search() {
      this.tableData = "";
      const re = await request.post("/get_indicator", this.action);
      this.tableData = re.data;
      this.updateTableData(); 
    },
    handleClick(row,index) {
        console.log(index);
      this.$notify({
        title: "指标定义详情  第"+(index+1)+"行",
        message: row.comment,
        duration: 0,
      });
    },
    open(row) {
      this.$prompt("请输入指标定义", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValue: row.comment,
      })
        .then(({ value }) => {
          row.comment = value;
          try {
            request.post("/update_indicator_control", row);
            this.$message({
              type: "success",
              message: "修改内容:" + value,
            });
          } catch (error) {
            this.$error({
              type: "error",
              message: '修改失败',
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
      
    updateTableData() {  
      const start = (this.currentPage - 1) * this.pageSize;  
      const end = this.currentPage * this.pageSize;  
      this.currentTableData = this.tableData.slice(start, end);  
    },  
    handleSizeChange(val) {  
      this.pageSize = val;  
      this.currentPage = 1; // 重置到第一页  
      this.updateTableData();  
    },  
    handleCurrentChange(val) {  
      this.currentPage = val;  
      this.updateTableData();  
    }  
  },
  async created(){
    this.tableData = "";
      const re = await request.post("/get_indicator", this.action);
      this.tableData = re.data;
      this.updateTableData();  
  }
};
</script>

<style></style>