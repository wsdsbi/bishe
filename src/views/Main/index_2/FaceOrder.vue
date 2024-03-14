<template>
  <div>
    <el-table :data="currentTableData" max-height="100%" border style="width: 100%">
      <el-table-column
        prop="createtime"
        label="日期"
        width="190"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="type"
        label="金属类型"
        width="190"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="address" label="回收地点" width="190" align="center">
      </el-table-column>
      
      <el-table-column
        prop="price"
        label="预估价格"
        width="190"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="height" label="重量" width="190" align="center">
      </el-table-column>
      <el-table-column prop="station" label="回收站点" width="190" align="center">
      </el-table-column>
      
      <el-table-column prop="date" label="回收日期" width="190" align="center">
      </el-table-column>

      <el-table-column label="回收人员">  
      <template slot-scope="">  
        <!-- scope.row 包含当前行的数据 -->  
        <!-- scope.$index 包含当前行的索引（行数，从0开始） -->  
       小婴 
      </template>  
    </el-table-column>  
    </el-table>
    <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
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
          type: "",
          bargin: "",
          height: "",
          price: "",
          desc: "",
          address: "",
          owned: "",
          station: "",
          date: "",
          account: "",
          createtime: "",
          stationer: "小婴",
        },
      ],
      currentTableData:[],
      action: {
        type: "",
        date:"",
        bargin: "",
        price: "",
        height: "",
        desc: "",
        owned: "",
        account: "",
        status: 0,
        myaccount: localStorage.getItem("account"),
        createtime: new Date().toLocaleString(),
        updatetime: new Date().toLocaleString()
      },
      currentPage: 1, // 当前页码  
      pageSize: 10, // 每页显示条目个数  
    };
  },
  methods: {
    async Search() {
      this.tableData = "";
      const re = await request.post("/show_metal_order", this.action);
      this.tableData = re.data;
      this.updateTableData(); 
    },
    handleClick(row,index) {
        console.log(index);
      this.$notify({
        title: "金属订单详情  第"+(index+1)+"行",
        message: row.desc,
        duration: 0,
      });
    },
    open(row) {
      this.$prompt("请输入金属描述", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValue: row.desc,
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
      const re = await request.post("/show_metal_order", this.action);
      this.tableData = re.data;
      this.updateTableData();  
  }
};
</script>

<style></style>