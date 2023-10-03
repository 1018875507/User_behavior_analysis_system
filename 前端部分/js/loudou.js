// WARNING: For GET requests, body is set to null by browsers.
var loudouarr=new Array();
var loudou = new XMLHttpRequest();
loudou.withCredentials = true;

loudou.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    var chartDom = document.getElementById('test');
var myChart = echarts.init(chartDom);
var option;
loudouarr = JSON.parse(this.responseText);
option = {
  
  tooltip: {
    trigger: 'item',
    formatter: '{b}:{c}: ({d}%)'
  },

  legend: {
    data: ['查看商品总数','加入购物车总数','生成订单总数','付款总数'],
    textStyle: {
      fontSize: 20,
      color: 'white',
  },
  },
  series: [
    {
      name: 'funnel',
      type: 'funnel',
      left: '10%',
      width: '80%',
      min: 0,
      max: 9000,
      minSize: '0%',
      maxSize: '100%',
      sort: 'descending',
      gap: 2,
      label: {
        show: true,
        position: 'inside'
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      },
      data: []
    }
  ]
};
b = ['查看商品总数','加入购物车总数','生成订单总数','付款总数']
counts = 0;
for(var province of loudouarr){
    option.series[0].data.push({
        'name': b[counts],
        'value': province.res,
    })
    counts++;
        console.log(province.name);
        console.log(province.res);
    }

option && myChart.setOption(option);
  }
});

loudou.open("GET", "http://localhost:8080/res_number");

loudou.send();