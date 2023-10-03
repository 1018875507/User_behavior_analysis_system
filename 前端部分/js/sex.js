// WARNING: For GET requests, body is set to null by browsers.
var sexarr=new Array();
var sexarr1=new Array();
var sexarr2=new Array();
var sex = new XMLHttpRequest();
sex.withCredentials = true;

sex.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    sexarr = JSON.parse(this.responseText);

var chartDom = document.getElementById('sex');
var myChart = echarts.init(chartDom);
var option;

option1 = {
  
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'right',
    textStyle :{
      color: 'white'
    }
  },
  
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '40%',
      data: [],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      label: {
        normal: {
            show: true,
            formatter: '{b}:{c}: ({d}%)' //自定义显示格式(b:name, c:value, d:百分比)
        }
    },

    }

  ]
};

for(var province of sexarr){
    option1.series[0].data.push({
        'name': province.source,
        'value': province.number,
    })
    sexarr1.push(province.source);
    sexarr2.push(province.number);
        console.log(province.source);
        console.log(province.number);
    }

option2 = {
  xAxis: {
    type: 'category',
    data: sexarr1,
  },
  yAxis: {
    type: 'value',
  },
  legend: {
    data: sexarr1,
  },
  
  series: [
    {
      
      data: sexarr2,
      type: 'bar'
    }
  ]
};

let currentOption = option1;  
setInterval(function () {
  currentOption =
    currentOption === option1 ? option2 : option1;
  myChart.setOption(currentOption);
}, 5000);  
myChart.setOption(currentOption);
option && myChart.setOption(currentOption);
  }
});

sex.open("GET", "http://localhost:8080/cluster_user");

sex.send();