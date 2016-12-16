var completeDimensions = require('echarts/lib/data/helper/completeDimensions');
var echarts = require('echarts');

echarts.extendSeriesModel({

    type: 'series.liquidFill',

    visualColorAccessPath: 'textStyle.normal.color',

    optionUpdated: function () {
        var option = this.option;
        option.gridSize = Math.max(Math.floor(option.gridSize), 4);
    },

    getInitialData: function (option, ecModel) {
        var dimensions = completeDimensions(['value'], option.data);
        var list = new echarts.List(dimensions, this);
        list.initData(option.data);
        return list;
    },

    defaultOption: {
        color: ['#294D99', '#156ACF', '#1598ED', '#45BDFF'],
        center: ['50%', '50%'],
        radius: '50%',
        amplitude: 20,
        waveLength: '80%',
        phase: 'auto',
        period: 'auto',
        direction: 'right',

        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
        animationDuration: 2000,
        animationDurationUpdate: 1000,

        outline: {
            borderDistance: 8,
            itemStyle: {
                borderColor: '#294D99',
                borderWidth: 8,
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.25)'
            }
        },

        itemStyle: {
            normal: {
                backgroundColor: '#E3F7FF',
                opacity: 0.95,
                shadowBlur: 50,
                shadowColor: 'rgba(0, 0, 0, 0.4)'
            },
            emphasis: {
                opacity: 0.8
            }
        },

        label: {
            normal: {
                show: true,
                textStyle: {
                    color: '#294D99',
                    insideColor: '#fff',
                    fontSize: 50,
                    fontWeight: 'bold',

                    align: 'center',
                    baseline: 'middle'
                },
                position: 'inside',
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.25)'
            }
        }
    }
});
