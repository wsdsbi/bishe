<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div>
          <el-statistic
            group-separator=","
            :precision="0"
            :value="value2"
            title="原子指标总数"
          ></el-statistic>
        </div>
      </el-col>

      <el-col :span="6">
        <div>
          <el-statistic title="完成度">
            <template slot="formatter"> 456/128 </template>
          </el-statistic>
        </div>
      </el-col>

      <el-col :span="6">
        <div>
          <el-statistic
            group-separator=","
            :precision="0"
            :value="value1"
            title="指标增长量"
          >
            <template slot="prefix">
              <i class="el-icon-s-flag" style="color: red"></i>
            </template>
            <template slot="suffix">
              <i class="el-icon-s-flag" style="color: blue"></i>
            </template>
          </el-statistic>
        </div>
      </el-col>

      <el-col :span="6">
        <div>
          <el-statistic :value="value2" title="日使用次数">
            <template slot="suffix">
              <span class="like">
                <i class="el-icon-star-off" v-show="!like"></i>
              </span>
            </template>
          </el-statistic>
        </div>
      </el-col>
    </el-row>
    <div style="display: flex; align-items: center">
      <div style="height: 70px; color: #000; margin-right: 640px;margin-left:340px ;">近五日指标日增长量</div>
      <div style="height: 70px; color: #000">指标总量日报</div>
    </div>
    <div class="container" style="">
      <div
        ref="chartContainer"
        style="width: 50%; height: 400px"
        label="sss"
      ></div>
      <glodb-map style="width: 50%; height: 400px"></glodb-map>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  GeoComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import westeros from "@/assets/echars/westeros.json";
import GlodbMap from "./GlodbMap.vue";
// 注册组件
echarts.use([
  GridComponent,
  TooltipComponent,
  CanvasRenderer,
  LineChart,
  TitleComponent,
  GeoComponent,
]);
echarts.registerTheme("westeros", westeros);
export default {
  components: { GlodbMap },
  data() {
    return {
      like: true,
      value1: 19,
      value2: 456,
      dates: []  
    };
  },
  methods: {
    getRecentFiveDays() {  
      const today = new Date();  
      const dates = [];  
  
      for (let i = 4; i >= 0; i--) {  
        const date = new Date(today);  
        date.setDate(today.getDate() - i);  
        const formattedDate = this.formatDate(date);  
        dates.push(formattedDate);  
      }  
  
      this.dates = dates;  
    },  
    formatDate(date) {  
      const year = date.getFullYear();  
      const month = String(date.getMonth() + 1).padStart(2, '0');  
      const day = String(date.getDate()).padStart(2, '0');  
      return `${year}-${month}-${day}`;  
    }  
    
  },
  mounted() {
    this.getRecentFiveDays();  
    // 创建一个Date对象  
    let today = new Date().toLocaleString(); 
    this.chart = echarts.init(this.$refs.chartContainer, "westeros");
    this.chart.setOption({
      xAxis: {
        data:this.dates,
      },
      yAxis: {},
      series: [
        {
          data: [10, 22, 28, 23, 19],
          type: "line",
          label: {
            show: true,
            position: "bottom",
            textStyle: {
              fontSize: 20,
            },
          },
        },
      ],
    });
  },
};
</script>
<style >
.like {
  cursor: pointer;
  font-size: 25px;
  display: inline-block;
}
.container {
  display: flex; /* 启用 Flexbox */
  justify-content: space-between; /* 在元素之间添加空间，可选 */
}
.container > div,
.container > glodb-map {
  width: 50%; /* 设置每个元素的宽度为容器的 50% */
  height: 400px; /* 设置每个元素的高度 */
  box-sizing: border-box; /* 确保 padding 和 border 包含在 width 内 */
}
/* 如果需要的话，添加一些边框或样式来区分元素 */
.container > div {
  border: 1px solid black;
}
.container > glodb-map {
  border: 1px solid red; /* 假设你想要一个红色的边框来区分这个自定义组件 */
}
</style>