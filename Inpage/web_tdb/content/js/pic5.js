// JavaScript Document
$(function () {
    $('#pic5').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ' '
        },
        subtitle: {
            text: ' '
        },
        xAxis: {
            categories: [
                '一月',
                '二月',
                '三月',
                '四月',
                '五月',
                '六月',
                '七月',
                '八月',
                '九月',
                '十月',
                '十一月',
                '十二月'
            ]
        },
          yAxis: {
			tickInterval: 5,   
            max:25,//纵轴的最大值  
            min: 0,//纵轴的最小值
            title: {
                text: ''
            },
            labels: {
                formatter: function() {
                    return this.value+'万';
                }
            }
        },
		legend: {
			enabled:false,
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
        },
		credits:{  
            enabled: false,  
        },  
               tooltip: {
            formatter: function() {
                return this.x +': '+ this.y+'万';
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: ' ',
			color:'#a8c8f0',
            data: [1, 4, 20, 25, 19, 4, 9, 8, 6, 15, 12, 10]

        }]
    });
});				