// JavaScript Document

  $(function () {
    $('#pic2').highcharts({
        chart: {
            type: 'area',
            spacingBottom: 5
        },
        title: {
            text: '',
        },
        subtitle: {
            text: '',
            floating: true,
            align: 'right',
            verticalAlign: 'bottom',
            y: 15
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
        xAxis: {
            categories: ['一月', '二月', '三月', '四月', '五月', '六月'],
			 labels: { 
                        align: 'right', 
                        style: {font: 'normal 12px 黑体'}
}
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
        tooltip: {
            formatter: function() {
                return this.x +': '+ this.y+'万';
            }
        },
        plotOptions: {
            area: {
                fillOpacity: 0.2,
				lineColor:"#607fae"
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '',
            data: [0, 1, 20, 24, 10, 2],
			marker: {
				fillColor: 'white',
				lineWidth: 2,
				lineColor: "#607fae"
			}
        }]
    });
});			