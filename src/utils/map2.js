let option = {
    backgroundColor: 'rgb(121,145,209)',
    geo: {
        map: 'shaoguan',
        aspectScale: 0.75,//地图长宽比
        zoom: 1.1,
        itemStyle: {
            normal: {
                areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#09132c'
                        },
                        {
                            offset: 1,
                            color: '#274b68'
                        }
                    ],
                    globalCoord: true
                },
                shadowColor: 'rgb(58,115,192)',
                shadowOffsetX: 10,
                shadowOffsetY: 10
            }
        },
        regions: [{
            name: '南海诸岛'
        }]
    },
    series: [{//配置地图相关参数，绘制地图，这个对象是关于地图图标的相关设置
        type: 'map',
        zoom: 1.1,
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: '#1DE9B6',
                    fontSize: '10px',
                }
            },
            emphasis: {
                textStyle: {
                    color: 'rgb(183,185,14)'
                }}
        },
        itemStyle: {
            normal: {
                backgroundColor: 'rgb(147,235,248)',
                borderWidth: 1,
                areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgb(31,54,150)',
                        },
                        {
                            offset: 1,
                            color: 'rgb(89,128,142)'
                        }
                    ],
                    globalCoord: true
                }
            },
            emphasis: {
                areaColor: 'rgb(76, 174, 213)',
                borderWidth: 0.1
            }
        },
        map: 'shaoguan'
    }]
}

export default option