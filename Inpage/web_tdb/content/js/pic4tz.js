// JavaScript Document
 $(function () {
    var chart;
    
    $(document).ready(function () {
    	
    	// Build the chart
        $('#pic4').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: '已结算收益百分比示意图',
				floating: true,
				align: 'right',
            verticalAlign: 'bottom',
			y: -60,
			x:-5,
			style: {  
                   font: 'normal 14px 黑体'  ,
                   color: 'black' , 
              },
            },
            tooltip: {
        	    pointFormat: '{point.percentage:.1f}%'
            },
			credits:{//右下角的文本  
            enabled: false,  
        },  
            plotOptions: {
                pie: {
					size:'100%',
                    allowPointSelect: true,
					animation:true,
                    cursor: 'pointer',
                    dataLabels: {
                    enabled: false
                    },
                    showInLegend: true,  
                  
                }
            },
			legend: { 
			style: {  
                   font: 'normal 12px 黑体'  ,
                   color: '#999', 
              }, 
            layout: 'vertical',
			rtl: "right",  
            align: 'right',  
            verticalAlign: 'bottom',  
            borderWidth: 0 ,
			
			  labelFormatter: function () {
          return this.name+'占比'+ this.y+'%';
     }
        },  
            series: [{//设置每小个饼图的颜色、名称、百分比  
                type: 'pie',  
                name:  '',  
                data: [ 
				    {name:'推荐项目所得收益',color:'#b8da32',y:40}, 
                    {name:'自有资金投资收益',color:'#fbb03f',y:50},  
					{
                    name: '推荐会员所得收益',
                    y: 10,
					color:'#a8c8f0',
                    sliced: true,
                    selected: true
                },  
                ]  
            }]  
        });
    });
    
});				