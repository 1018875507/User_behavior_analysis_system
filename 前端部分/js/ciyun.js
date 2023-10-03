
// WARNING: For GET requests, body is set to null by browsers.
const colorList = [
    "#FACC14",
    "#2FC25B",
    "#1890FF",
    "#9AE65C",
    "#41D9C7",
]
var ciyunarr=new Array();
var ciyun = new XMLHttpRequest();
ciyun.withCredentials = true;

ciyun.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    ciyunarr = JSON.parse(this.responseText);

    var myChart = echarts.init(document.getElementById('ciyun'));
    

    var option = {
        series: [{
            type: 'wordCloud',
           //maskImage: maskImage,
            sizeRange: [15, 80],
            rotationRange: [0, 0],
            rotationStep: 45,
            gridSize: 8,
            shape: 'circle',
            
            width: '100%',
            height: '100%',
             textStyle: {
                normal: {
                    color: function() {
                        let index = Math.floor(Math.random() * colorList.length);
                        return colorList[index];
                    },
   
                    fontFamily: 'sans-serif',
                    fontWeight: 'normal'
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: []
        }]
    };
    for(var province of ciyunarr){
        option.series[0].data.push({
            'name': province.action,
            'value': province.number,
        })
            console.log(province.action);
            console.log(province.number);
        }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });

  }
});

ciyun.open("GET", "http://localhost:8080/all_behavior_analyse");

ciyun.send();