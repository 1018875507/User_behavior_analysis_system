// WARNING: For GET requests, body is set to null by browsers.
var xingweiarr=new Array();

var date1arr=new Array();
var view1arr=new Array();
var add1arr=new Array();
var order1arr=new Array();
var payment1arr=new Array();

var date1arr1=new Array();
var view1arr1=new Array();
var add1arr1=new Array();
var order1arr1=new Array();
var payment1arr1=new Array();

var date1arr2=new Array();
var view1arr2=new Array();
var add1arr2=new Array();
var order1arr2=new Array();
var payment1arr2=new Array();

var xingwei = new XMLHttpRequest();
xingwei.withCredentials = true;
xingwei.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    xingweiarr = JSON.parse(this.responseText);
    console.log(xingweiarr);
    for(var a of xingweiarr){
          date1arr.push(a.adate);
          view1arr.push(a.view_products);
          add1arr.push(a.shopping_cart);
          order1arr.push(a.generate_order);
          payment1arr.push(a.payment);
        }

      date1arr1 = date1arr.slice(0,4);
      date1arr2 = date1arr.slice(4);
      view1arr1 = view1arr.slice(0,4);
      view1arr2 = view1arr.slice(4);
      
      add1arr1 = add1arr.slice(0,4);
      add1arr2 = add1arr.slice(4);
      
      order1arr1 = order1arr.slice(0,4);
      order1arr2 = order1arr.slice(4);
      console.log(add1arr);
      console.log(add1arr1);
      console.log(add1arr2);
      payment1arr1 = payment1arr.slice(0,4);
      payment1arr2 = payment1arr.slice(4);
      //echarts画图
      var count = 0;
      var showArea = document.getElementById("pie_age");
      var showChart = echarts.init(showArea);  
      var showOption = {
        title: {
          text: '用户每日行为折线图',
          left: 'center',
        top: '30px',
        textStyle :{
          color : 'white',

        }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: 'red'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        legend: {
          data: ['view','add','order','payment'],
          textStyle :{
            color: 'white'
          }
        },
                xAxis: {
                      type: 'category',
                      data: date1arr1,
                      axixLine:{
                            show:true,
                            lineStyle:{
                                color:"white",
                            }
                        },
                        axisLabel:{
                            show:true,
                            textStyle:{
                                color:"white",
                                fontSize:10
                            }
                        },
                    },
                    yAxis: {
                      type: 'value',
                      axixLine:{
                            show:true,
                            lineStyle:{
                                color:"white",
                                wdith:5,
                                type:"solid"
                            }
                        },
                        axisLabel:{
                            show:true,
                            textStyle:{
                                color:"white",
                                fontSize:10
                            }
                        },
                    },
                    series: [
                      {
                        name: 'view',  
                        data: view1arr1,
                        type: 'line',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        symbolSize: 5,
                        lineStyle: {
                          color: 'white',
                          width: 4
                        },
                        itemStyle:{
                          normal:{
                                 label:{
                                      show:true //在每个上面显示当前值
                                  }
                           }
                        }
                      },
                      {
                        name: 'add',  
                        data: add1arr1,
                        type: 'line',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        symbolSize: 5,
                        lineStyle: {
                          color: 'white',
                          width: 4
                        },
                        itemStyle:{
                          normal:{
                                 label:{
                                      show:true //在每个上面显示当前值
                                  }
                           }
                        }
                         
                      },
                      {
                        name: 'order',  
                        data: order1arr1,
                        type: 'line',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        symbolSize: 5,
                        lineStyle: {
                          color: 'white',
                          width: 4
                        },
                        itemStyle:{
                          normal:{
                                 label:{
                                      show:true //在每个上面显示当前值
                                  }
                           }
                        }
                      },
                      {
                        name: 'payment',  
                        data: payment1arr1,
                        type: 'line',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        symbolSize: 5,
                        lineStyle: {
                          color: 'white',
                          width: 4
                        },
                        itemStyle:{
                          normal:{
                                 label:{
                                      show:true //在每个上面显示当前值
                                  }
                           }
                        }
                      }
                    ]
                  };
      showChart.setOption(showOption);
      //定时更新
      timer1 = setInterval(function(){
          //当长度大于10时，去除数组首元素
          if(date1arr1.length > 3){
              date1arr1.shift();
              view1arr1.shift();
              add1arr1.shift();
              order1arr1.shift();
              payment1arr1.shift();
            }console.log(count);
          /*;
          console.log(date1arr1);*/
         
          date1arr1.push(date1arr2[count]);
          view1arr1.push(view1arr2[count]);
          add1arr1.push(add1arr2[count]);
          order1arr1.push(order1arr2[count]);
          payment1arr1.push(payment1arr2[count]);
          count++;
          //重新绘制
          showChart.setOption({
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: 'white',
                }
              }
            },
            legend: {
              data: ['view','add','order','payment']
            },
                          xAxis: {
                
                  type: 'category',
                  data: date1arr1,
                  axixLine:{
                        show:true,
                        lineStyle:{
                            color:"white"
                        }
                    },
                    axisLabel:{
                        show:true,
                        textStyle:{
                            color:"white",
                            fontSize:10
                        }
                    },
                },
                yAxis: {
                  type: 'value',
                  axixLine:{
                        show:true,
                        lineStyle:{
                            color:"white",
                            wdith:5,
                            type:"solid"
                        }
                    },
                    axisLabel:{
                        show:true,
                        textStyle:{
                            color:"white",
                            fontSize:10
                        }
                    },
                },
                series: [
                  {
                    name: 'view',  
                    data: view1arr1,
                    type: 'line',
                    areaStyle: {},
                    emphasis: {
                      focus: 'series'
                    },
                    symbolSize: 5,
                    lineStyle: {
                      color: 'white',
                      width: 4
                    },
                    itemStyle:{
                      normal:{
                             label:{
                                  show:true //在每个上面显示当前值
                              }
                       }
                    }
                  },
                  {
                    name: 'add',  
                    data: add1arr1,
                    type: 'line',
                    areaStyle: {},
                    emphasis: {
                      focus: 'series'
                    },
                    symbolSize: 5,
                    lineStyle: {
                      color: 'white',
                      width: 4
                    },
                    itemStyle:{
                      normal:{
                             label:{
                                  show:true //在每个上面显示当前值
                              }
                       }
                    }
                     
                  },
                  {
                    name: 'order',  
                    data: order1arr1,
                    type: 'line',
                    areaStyle: {},
                    emphasis: {
                      focus: 'series'
                    },
                    symbolSize: 5,
                    lineStyle: {
                      color: '#FFFFFF',
                      width: 4
                    },
                    itemStyle:{
                      normal:{
                             label:{
                                  show:true //在每个上面显示当前值
                              }
                       }
                    }
                  },
                  {
                    name: 'payment',  
                    data: payment1arr1,
                    type: 'line',
                     areaStyle: {},
                    emphasis: {
                    focus: 'series'
                    },
                    symbolSize: 5,
                    lineStyle: {
                      color: '#FFFFFF',
                      width: 4
                    },
                    itemStyle:{
                      normal:{
                             label:{
                                  show:true //在每个上面显示当前值
                              }
                       }
                    }
                  }
                  

                ]    
          
          
          }); 
          if(count==17){
            showChart.setOption({
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  label: {
                    backgroundColor: 'white',
                  }
                }
              },
              legend: {
                data: ['view','add','order','payment']
              },
                            xAxis: {
                  
                    type: 'category',
                    data: date1arr,
                    axixLine:{
                          show:true,
                          lineStyle:{
                              color:"#FFFFFF"
                          }
                      },
                      axisLabel:{
                          show:true,
                          textStyle:{
                              color:"white",
                              fontSize:10
                          }
                      },
                  },
                  yAxis: {
                    type: 'value',
                    axixLine:{
                          show:true,
                          lineStyle:{
                              color:"#FFFFFF",
                              wdith:5,
                              type:"solid"
                          }
                      },
                      axisLabel:{
                          show:true,
                          textStyle:{
                              color:"white",
                              fontSize:10
                          }
                      },
                  },
                  series: [
                    {
                      name: 'view',  
                      data: view1arr,
                      type: 'line',
                      areaStyle: {},
                      emphasis: {
                        focus: 'series'
                      },
                      symbolSize: 5,
                      lineStyle: {
                        color: '#FFFFFF',
                        width: 4
                      },
                      itemStyle:{
                        normal:{
                               label:{
                                    show:false //在每个上面显示当前值
                                }
                         }
                      }
                      
                    },
                    {
                      name: 'add',  
                      data: add1arr,
                      type: 'line',
                      areaStyle: {},
                      emphasis: {
                        focus: 'series'
                      },
                      symbolSize: 5,
                      lineStyle: {
                        color: '#FFFFFF',
                        width: 4
                      },
                      itemStyle:{
                        normal:{
                               label:{
                                    show:false //在每个上面显示当前值
                                }
                         }
                      }
                      
                      
                      
                       
                    },
                    {
                      name: 'order',  
                      data: order1arr,
                      type: 'line',
                      areaStyle: {},
                      emphasis: {
                        focus: 'series'
                      },
                      symbolSize: 5,
                      lineStyle: {
                        color: '#FFFFFF',
                        width: 4
                      },
                      itemStyle:{
                        normal:{
                               label:{
                                    show:false //在每个上面显示当前值
                                }
                         }
                      }
                      
                    },
                    {
                      name: 'payment',  
                      data: payment1arr,
                      type: 'line',
                       areaStyle: {},
                      emphasis: {
                      focus: 'series'
                      },
                      symbolSize: 5,
                      lineStyle: {
                        color: '#FFFFFF',
                        width: 4
                      },
                      itemStyle:{
                        normal:{
                               label:{
                                    show:false //在每个上面显示当前值
                                }
                         }
                      }
                      
                    }
                    
  
                  ]    
            
            
            });

            clearInterval(timer1);
          }
      }, 200);
      console.log(count);
      

  }
  
});

xingwei.open("GET", "http://localhost:8080/action_sum");

xingwei.send();