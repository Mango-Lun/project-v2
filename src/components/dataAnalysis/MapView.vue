<template>
  <div class="map-view">
    <el-card>
      <div id="main"></div>
    </el-card>
  </div>
</template>

<script>
import ChinaJson from 'echarts/map/json/china.json'
export default {
  data() {
    return {}
  },
  mounted() {
    // console.log(geoJson)
    let myChart = this.$echarts.init(document.getElementById('main'))
    this.$echarts.registerMap('china', ChinaJson)

    let option = {
      geo: {
        map: 'china',
        aspectScale: 0.75,
        zoom: 1.1,
        regions: [
          {
            name: '南海岛屿',
          },
        ],
      },
      series: [
        {
          type: 'map',
          zoom: 1.1,
          map: 'china',
        },
      ],
    }
    myChart.setOption(option)
  },
}
</script>

<style lang="scss">
.map-view {
  width: 100%;
  .el-card {
    width: 100%;
    #main {
      height: 600px;
    }
  }
}
</style>
