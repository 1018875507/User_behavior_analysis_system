var arr1=new Array();
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    arr = JSON.parse(xhr.responseText);
    
    // 初始化echart实例对象
var myChart = echarts.init(document.getElementById('china_map'));
// 指定图表的配置项和数据
var option = {
    title: {
        text: '各省份用户人数',
        textStyle: {
            color: 'white',
            fontStyle: 'normal',

        },
        left: 'center',
        top: '40px'

    },
    tooltip: {
        trigger: 'item'
    },
    visualMap: { // 左侧小导航图标
        show: true,
        x: 'left',
        y: 'top',
        textStyle: {
            fontSize: 20,
            color: 'white',
        },
        splitList: [{
                start: 0,
                end: 10
            },
            {
                start: 11,
                end: 20
            },
            {
                start: 21,
                end: 30
            },
            {
                start: 31,
                end: 40
            },
            {
                start: 41,
                end: 50
            },
            {
                start: 50
            }
        ],
        color: ['#ff0000', '#FF9912', '#F0F06F','#00CC00','#0E94EB',  '#6FBCF0']
    },
    series: [{
        name: '累计人数',
        type: 'map',
        mapType: 'china',
        roam: false, // 禁用拖动和缩放
        itemStyle: { // 图形样式
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#009fe8', //区域边框颜色
                areaColor: "#ffefd5", //区域颜色
            },
            emphasis: { // 鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor: "#fff",
            }
        },
        label: { // 图形上的文本标签
            normal: {
                show: true, //省份名称
                fontSize: 12,
            },
            emphasis: {
                show: true,
                fontSize: 20,
            }
        },
        data: [] /*{'name': '上海','value': 318}, {'name': '云南','value': 162}*/
    }]
};

// 遍历每一个省自治区、直辖市
for(var province of arr){
    option.series[0].data.push({
        'name': province.province,
        'value': province.number,
    })
        console.log(province.province);
        console.log(province.number);
    }
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
  }
});

xhr.open("GET", "http://localhost:8080/user_anaylse");

xhr.send();