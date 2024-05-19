<template>
    <div class="map-view" :data="form">
        {{ form.countryMap }}<div id="main1"></div>
        {{ form.cityMap }}<div id="main2"></div>
    </div>
</template>
<script>
import geoJson from '@/assets/china.json'
// import heoJson from '@/assets/guangdong.json'
import heoJson from '@/assets/shaoguan.json'
import map1 from '@/utils/map1'
import map2 from '@/utils/map2'
import echarts from 'echarts'
import { onMounted } from 'vue'
export default {
    setup() {
        onMounted(() => {
            let myChart1 = echarts.init(document.getElementById('main1'))
            echarts.registerMap('china',geoJson)
            let option1 = map1
            myChart1.setOption(option1)
            let myChart2 = echarts.init(document.getElementById('main2'))
            echarts.registerMap('shaoguan',heoJson)
            let option2 = map2
            myChart2.setOption(option2)
        })
    },
    data() {
        return {
            form: {
            countryMap: '中国地图',
            cityMap: '韶关地图'
            }
        }
    }
}
</script>
<style lang="less">
.map-view {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: larger;
    color: crimson;
        #main1,#main2 {
            width: 100%;
            height: 500px;
        }
    
}
</style>