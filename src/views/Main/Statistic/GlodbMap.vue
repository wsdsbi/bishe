<template>
  <div
    id="chart-container"
    ref="chartContainer"
    style="width: 600px; height: 400px"
  ></div>
</template>  
    
  <script>
import * as echarts from "echarts";
import westeros from "@/assets/echars/westeros.json";
echarts.registerTheme("westeros", westeros);

const today = new Date();
const date = new Date(today);
date.setDate(today.getDate() - 10);

export default {
  name: "EChartsDemo",
  data() {
    return {
      myChart: null,
      date: [],
      data: [Math.random() * 10],
      base: "",
      oneDay: 24 * 3600 * 1000,
      now: date.setDate(today.getDate() - 200),
      option: {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.date,
        },
        yAxis: {
          boundaryGap: [0, "50%"],
          type: "value",
        },
        series: [
          {
            name: "成交",
            type: "line",
            smooth: true,
            symbol: "none",
            stack: "a",
            areaStyle: {
              normal: {},
            },
            data: this.data,
            label: {
              show: true,
              position: "bottom",
              textStyle: {
                fontSize: 20,
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.initChart();
    this.fetchData();
    this.startInterval();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
    if (this.myChart) {
      this.myChart.dispose();
    }
  },
  methods: {
    formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    initChart() {
      // 初始化图表
      this.myChart = echarts.init(this.$refs.chartContainer, "westeros");
      // 首次设置图表选项
      this.myChart.setOption(this.option);
    },
    fetchData() {
      // 初始化数据（这里使用循环模拟数据获取）
      for (let i = 1; i < 100; i++) {
        this.addData();
      }
    },
    addData(shift) {
      console.log(this.now);
      this.now = new Date(+this.now + this.oneDay);
      const nowStr = [
        this.now.getFullYear(),
        this.now.getMonth() + 1,
        this.now.getDate(),
      ].join("/");
      this.date.push(nowStr);

      this.data.push(
        (Math.random() - 0.4) * 10 + this.data[this.data.length - 1]
      );
      if (shift) {
        this.date.shift();
        this.data.shift();
      }
    },
    updateChart() {
      // 更新图表数据
      this.addData(true);
      this.myChart.setOption({
        xAxis: {
          data: this.date,
        },
        series: [
          {
            name: "成交",
            data: this.data,
          },
        ],
      });
    },
    startInterval() {
      // 设置定时器更新数据
      this.intervalId = setInterval(this.updateChart, 1000);
    },
  },
};
</script>  
    
  <style scoped>
/* 可以在这里添加一些样式 */
</style>