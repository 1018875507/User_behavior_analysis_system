var careerarr=new Array();
var career = new XMLHttpRequest();
career.withCredentials = true;
career.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    careerarr = JSON.parse(this.responseText);

    var chartDom = document.getElementById('test1');
var myChart = echarts.init(chartDom);
var option;

option = {
  
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
  },
  legend: {
    orient :'horizontal',
    textStyle :{
      color: 'white'
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [10, '50%'],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      labelLine:{
      
        length: 1,
        length2: 0,
      },
      label: {
        normal: {
            show: true,
            formatter: '{b}:{c}: ({d}%)' //自定义显示格式(b:name, c:value, d:百分比)
        }
    },

      data: [
      ]
    }
  ]
};
for(var province of careerarr){
    option.series[0].data.push({
        'name': province.career,
        'value': province.number,
    })
        console.log(province.career);
        console.log(province.number);
    }

option && myChart.setOption(option);

  }
});

career.open("GET", "http://localhost:8080/career_number");

career.send();

















var chartDom = document.getElementById('center1');
var myChart = echarts.init(chartDom);
var option;

option = {
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
      ]
    }
  ]
};

option && myChart.setOption(option);