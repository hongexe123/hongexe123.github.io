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
            data: [ 
				    {y:10}, 
                    {y:3},  
					{y:3},
				    {y:20}, 
                    {color:'#fbb03f', y:13},  
					{y:23},
				    {y:25}, 
                    {y:3},  
					{y:6},
				    {y:15}, 
                    {y:13},  
					{y:23},  
                ]  

        }]
    });
});				