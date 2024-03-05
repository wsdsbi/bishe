<template>  
    <div id="main" ref="chartDom" style="width: 2000px; height: 800px;"></div>  
  </template>  
    
  <script>  
  import * as echarts from 'echarts';  
  import 'echarts-gl';  
    
  export default {  
    name: 'EChartsGlobe',  
    data() {  
      return {  
        myChart: null,  
        option: {  
          backgroundColor: '#000',  
          globe: {  
            baseTexture: require('@/assets/earth.jpg'),  
            heightTexture: require('@/assets/4k.jpg'),  
            displacementScale: 0.1,  
            shading: 'lambert',  
            environment: require('@/assets/starfield.jpg'),  
            light: {  
              ambient: {  
                intensity: 0.1  
              },  
              main: {  
                intensity: 1.5  
              }  
            },  
            layers: [  
            {  
                type: 'blend',  
                blendTo: 'emission',  
                texture: require('@/assets/night.jpg')  
              },  
              {  
                type: 'overlay',  
                texture: require('@/assets/clouds.png'),  
                shading: 'lambert',  
                distance: 5  
              }  
            ]  
          },  
          series: []  
        }  
      };  
    },  
    mounted() {  
      this.myChart = echarts.init(this.$refs.chartDom);  
      this.myChart.setOption(this.option);  
    },  
    beforeDestroy() {  
      if (this.myChart) {  
        this.myChart.dispose();  
      }  
    }  
  };  
  </script>  
    
  <style scoped>  
  /* Add any component-specific styles here */  
  </style>