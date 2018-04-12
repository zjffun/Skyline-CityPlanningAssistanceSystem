export {ribbon_data, ribbon_btns}
/**
按钮名：{
  类型(type): 
    默认 imm(immediatly) 直接执行
    可选 toggle 开关
      is_on 是否开启
    可选 toggle_group_work_area 工作区开关组
    可选 toggle_group_pattern 模式开关组
    可选 toggle_group_nav 导航开关组
  是否可用(enable): 
  执行的操作(exec): 
}
*/
var ribbon_btns = {
  "selectObj": {

    "exex": "execute(1021,0)"
  },
  "execute(1022,0)": {
    "exex": "execute(1022,0)"
  },
  "information": {
    "exex": "execute(1023,0,'select','information')"
  },
  "areaSelection": {
    "exex": "execute(1024,0,'select','areaSelection')"
  },
  "timeSlider": {
    "exex": "execute(1065,4,'pressDown_Check','timeSlider')"
  },
  "sun": {
    "exex": "execute(1026,0,'pressDown_Check','sun')"
  },
  "shadow": {
    "exex": "execute(2118,0,'pressDown_Check','shadow')"
  },
  "undergroundMode": {
    "exex": "execute(1027,0,'pressDown_Check','undergroundMode')"
  },
  "execute(1013,8)": {
    "exex": "execute(1013,8)"
  },
  "execute(1014,2)": {
    "exex": "execute(1014,2)"
  },
  "execute(1016,0)": {
    "exex": "execute(1016,0)"
  },
  "execute(1017,0)": {
    "exex": "execute(1017,0)"
  },
  "execute(1018,0)": {
    "exex": "execute(1018,0)"
  },
  "paste": {
    "exex": "execute(1030,0)"
  },
  "execute(1031,0)": {
    "exex": "execute(1031,0)"
  },
  "execute(1032,0)": {
    "exex": "execute(1032,0)"
  },
  "execute(1033,0)": {
    "exex": "execute(1033,0)"
  },
  "HorizontalMeasure": {
    "exex": "execute(1034,0,'Measure','HorizontalMeasure')"
  },
  "spaceMeasure": {
    "exex": "execute(1035,0,'Measure','spaceMeasure')"
  },
  "verticalDistance": {
    "exex": "execute(1036,0,'Measure','verticalDistance')"
  },
  "terrainArea": {
    "exex": "execute(1165,0,'Measure','terrainArea')"
  },
  "threeDArea": {
    "exex": "execute(1037,0,'Measure','threeDArea')"
  },
  "ContourMap": {
    "exex": "createContourMap()"
  },
  "SlopeAnalysis()": {
    "exex": "SlopeAnalysis()"
  },
  "execute(1042,0)": {
    "exex": "execute(1042,0)"
  },
  "execute(1043,0)": {
    "exex": "execute(1043,0)"
  },
  "execute(1044,0)": {
    "exex": "execute(1044,0)"
  },
  "execute(1046,0)": {
    "exex": "execute(1046,0)"
  },
  "execute(2117,0)": {
    "exex": "execute(2117,0)"
  },
  "execute(1047,0)": {
    "exex": "execute(1047,0)"
  },
  "collision": {
    "exex": "execute(1140,0,'pressDown_Check','collision')"
  },
  "dragMode": {
    "exex": "execute(1049,0,'dragMode','dragMode')"
  },
  "Slide": {
    "exex": "execute(1050,0,'Slide','Slide')"
  },
  "turn": {
    "exex": "execute(1051,0,'turn','turn')"
  },
  "threeDMode": {
    "exex": "execute(1052,0,'threeDMode','threeDMode')"
  },
  "twoDMode": {
    "exex": "execute(1053,0,'twoDMode','twoDMode')"
  },
  "northMode": {
    "exex": "execute(1054,0,'northMode','northMode')"
  },
  "zoomBtn()": {
    "exex": "zoomBtn()"
  },
  "execute(1056,0)": {
    "exex": "execute(1056,0)"
  },
  "rotate": {
    "exex": "execute(1057,0,'track','rotate')"
  },
  "OvalRotate": {
    "exex": "execute(1057,1,'track','OvalRotate')"
  },
  "ArcPattern": {
    "exex": "execute(1057,2,'track','ArcPattern')"
  },
  "LinePattern": {
    "exex": "execute(1057,3,'track','LinePattern')"
  },
  "execute(1057,4)": {
    "exex": "execute(1057,4)"
  },
  "execute(1057,5)": {
    "exex": "execute(1057,5)"
  },
  "execute(1057,6)": {
    "exex": "execute(1057,6)"
  },
  "execute(1057,7)": {
    "exex": "execute(1057,7)"
  },
  "execute(1057,8)": {
    "exex": "execute(1057,8)"
  },
  "execute(1057,9)": {
    "exex": "execute(1057,9)"
  },
  "execute(1057,10)": {
    "exex": "execute(1057,10)"
  },
  "execute(1057,11)": {
    "exex": "execute(1057,11)"
  },
  "zoomIn()": {
    "exex": "zoomIn()"
  },
  "zoomOut()": {
    "exex": "zoomOut()"
  },
  "FullImage()": {
    "exex": "FullImage()"
  },
  "zoomIn2DMap()": {
    "exex": "zoomIn2DMap()"
  },
  "NavigationCtl": {
    "exex": "execute(1065,0,'pressDown_Check','NavigationCtl')"
  },
  "CenterSign": {
    "exex": "execute(1065,1,'pressDown_Check','CenterSign')"
  },
  "StatusBar": {
    "exex": "execute(1065,2,'pressDown_Check','StatusBar')"
  },
  "ScaleBar": {
    "exex": "execute(1065,3,'pressDown_Check','ScaleBar')"
  },
  "GraphicHUD": {
    "exex": "execute(1065,5,'pressDown_Check','GraphicHUD')"
  },
  "execute(1012,0)": {
    "exex": "execute(1012,0)"
  },
  "execute(1012,1)": {
    "exex": "execute(1012,1)"
  },
  "execute(1012,4)": {
    "exex": "execute(1012,4)"
  },
  "execute(1012,5)": {
    "exex": "execute(1012,5)"
  },
  "execute(1012,6)": {
    "exex": "execute(1012,6)"
  },
  "execute(1012,7)": {
    "exex": "execute(1012,7)"
  },
  "execute(1012,9)": {
    "exex": "execute(1012,9)"
  },
  "execute(1012,10)": {
    "exex": "execute(1012,10)"
  },
  "execute(1012,11)": {
    "exex": "execute(1012,11)"
  },
  "execute(1012,8)": {
    "exex": "execute(1012,8)"
  },
  "execute(1012,13)": {
    "exex": "execute(1012,13)"
  },
  "execute(1012,14)": {
    "exex": "execute(1012,14)"
  },
  "execute(1012,21)": {
    "exex": "execute(1012,21)"
  },
  "execute(1012,24)": {
    "exex": "execute(1012,24)"
  },
  "execute(1012,20)": {
    "exex": "execute(1012,20)"
  },
  "execute(1012,26)": {
    "exex": "execute(1012,26)"
  },
  "execute(1012,27)": {
    "exex": "execute(1012,27)"
  },
  "execute(1086,0)": {
    "exex": "execute(1086,0)"
  },
  "selectLayerF": {
    "exex": "execute(1070,0,'selectElement','selectLayerF')"
  },
  "aeraSelectF": {
    "exex": "execute(1071,0,'selectElement','aeraSelectF')"
  },
  "lineSelect": {
    "exex": "execute(1072,0,'selectElement','lineSelect')"
  },
  "pointSelect": {
    "exex": "execute(1073,0,'selectElement','pointSelect')"
  },
  "ObjSelect": {
    "exex": "execute(1156,0,'selectElement','ObjSelect')"
  },
  "createPresentation()": {
    "exex": "createPresentation()"
  },
  "Presentation(1099,0)": {
    "exex": "Presentation(1099,0)"
  },
  "Presentation(1101,0,this)": {
    "exex": "Presentation(1101,0,this)"
  },
  "Presentation(1102,0)": {
    "exex": "Presentation(1102,0)"
  },
  "Presentation(1111,0)": {
    "exex": "Presentation(1111,0)"
  },
  "Presentation(1112,0)": {
    "exex": "Presentation(1112,0)"
  },
  "Presentation(1116,0)": {
    "exex": "Presentation(1116,0)"
  },
  "execute(1067,0)": {
    "exex": "execute(1067,0)"
  },
  "excavation()": {
    "exex": "excavation()"
  },
  "showAllObj()": {
    "exex": "showAllObj()"
  },
  "hiddenAllObj()": {
    "exex": "hiddenAllObj()"
  },
  "showPipeline()": {
    "exex": "showPipeline()"
  },
  "heightLabel": {
    "exex": "heightMark()"
  },
  "coordLabel": {
    "exex": "coordLabel()"
  },
  "SlopeLable": {
    "exex": "SlopeLable()"
  },
  "clearLabel()": {
    "exex": "clearLabel()"
  }
}

// 挂到window上，不然找不到
var ribbon_data = {
  selected: 0, //默认第几个是选择的
  tabs: [
    {
      "title": "主页",
      "groups": [
        {
          "title": "选择",
          "tools": [
            {
              "name": "selectObj",
              "text": "选择",
              "iconCls": "icon-choose icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "type": "toolbar",
              "dir": "v",
              "tools": [
                {
                  "name": "execute(1022,0)",
                  "text": "属性",
                  "iconCls": "icon-attribute icon-small"
                },
                {
                  "name": "information",
                  "text": "信息",
                  "iconCls": "icon-information icon-small"
                },
                {
                  "name": "areaSelection",
                  "text": "区域选择",
                  "iconCls": "icon-area icon-small"
                }
              ]
            }
          ]
        },
        {
          "title": "视图",
          "tools": [
            {
              "name": "timeSlider",
              "text": "时间滑块",
              "iconCls": "icon-time icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "sun",
              "text": "太阳",
              "iconCls": "icon-sun icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "模式",
          "tools": [
            {
              "name": "shadow",
              "text": "阴影",
              "iconCls": "icon-shadow icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "undergroundMode",
              "text": "地下模式",
              "iconCls": "icon-underground icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "添加",
          "tools": [
            {
              "name": "execute(1013,8)",
              "text": "特征图层",
              "iconCls": "icon-layer icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1014,2)",
              "text": "栅格图层",
              "iconCls": "icon-grid icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1016,0)",
              "text": "兴趣点",
              "iconCls": "icon-savorPoint icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1017,0)",
              "text": "树信息",
              "iconCls": "icon-treeInformation icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1018,0)",
              "text": "创建组",
              "iconCls": "icon-group icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "剪切板",
          "tools": [
            {
              "name": "paste",
              "text": "粘贴",
              "iconCls": "icon-paste icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "type": "toolbar",
              "dir": "v",
              "tools": [
                {
                  "name": "execute(1031,0)",
                  "text": "复制",
                  "iconCls": "icon-copy icon-small"
                },
                {
                  "name": "execute(1032,0)",
                  "text": "剪切",
                  "iconCls": "icon-shear icon-small"
                },
                {
                  "name": "execute(1033,0)",
                  "text": "删除",
                  "iconCls": "icon-delete icon-small"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "分析",
      "groups": [
        {
          "title": "测量工具",
          "tools": [
            {
              "name": "HorizontalMeasure",
              "text": "水平距离",
              "iconCls": "icon-horizontal icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "spaceMeasure",
              "text": "空间距离",
              "iconCls": "icon-space icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "verticalDistance",
              "text": "垂直距离",
              "iconCls": "icon-vertical icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "terrainArea",
              "text": "地形面积",
              "iconCls": "icon-area icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "threeDArea",
              "text": "3D面积",
              "iconCls": "icon-threeDarea icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "地形分析",
          "tools": [
            {
              "name": "ContourMap",
              "text": "等高线图",
              "iconCls": "icon-denggao icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "SlopeAnalysis()",
              "text": "坡度分析",
              "iconCls": "icon-Slope icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1042,0)",
              "text": "路径分析",
              "iconCls": "icon-path icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1043,0)",
              "text": "剖面分析",
              "iconCls": "icon-poumian icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1044,0)",
              "text": "淹没分析",
              "iconCls": "icon-yanmofenxi icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "视域",
          "tools": [
            {
              "name": "execute(1046,0)",
              "text": "视线分析",
              "iconCls": "icon-sight icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(2117,0)",
              "text": "3D视域",
              "iconCls": "icon-threeD icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1047,0)",
              "text": "视域分析",
              "iconCls": "icon-perspective icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "检测",
          "tools": [
            {
              "name": "collision",
              "text": "碰撞检测",
              "iconCls": "icon-pengzhuang icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        }
      ]
    },
    {
      "title": "导航",
      "groups": [
        {
          "title": "导航模式",
          "tools": [
            {
              "name": "dragMode",
              "text": "拖动模式",
              "iconCls": "icon-drag icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "Slide",
              "text": "滑动模式",
              "iconCls": "icon-huadong icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "turn",
              "text": "转弯模式",
              "iconCls": "icon-zhuangwan icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "地图模式",
          "tools": [
            {
              "name": "threeDMode",
              "text": "3D导航",
              "iconCls": "icon-threeD_ icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "twoDMode",
              "text": "2D导航",
              "iconCls": "icon-twoD icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "northMode",
              "text": "指北导航",
              "iconCls": "icon-zhibeidaohang icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "导航到",
          "tools": [
            {
              "name": "zoomBtn()",
              "text": "缩放",
              "iconCls": "icon-suofang icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1056,0)",
              "text": "指北针",
              "iconCls": "icon-zhibeizhen icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "跟踪模式",
          "tools": [
            {
              "name": "rotate",
              "text": "环绕模式",
              "iconCls": "icon-huanrao icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "type": "toolbar",
              "dir": "v",
              "tools": [
                {
                  "name": "OvalRotate",
                  "text": "椭圆环绕",
                  "iconCls": "icon-tuoyuan icon-small"
                },
                {
                  "name": "ArcPattern",
                  "text": "弧形环绕",
                  "iconCls": "icon-Arc icon-small"
                },
                {
                  "name": "LinePattern",
                  "text": "直线模式",
                  "iconCls": "icon-line icon-small"
                }
              ]
            }
          ]
        },
        {
          "title": "观测对象模式",
          "tools": [
            {
              "name": "execute(1057,4)",
              "text": "对象后方",
              "iconCls": "icon-houmian icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1057,5)",
              "text": "对象上方",
              "iconCls": "icon-up icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1057,6)",
              "text": "对象下方",
              "iconCls": "icon-down icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1057,7)",
              "text": "对象右侧",
              "iconCls": "icon-right icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1057,8)",
              "text": "对象左侧",
              "iconCls": "icon-left icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1057,9)",
              "text": "从后上方",
              "iconCls": "icon-houshang icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1057,10)",
              "text": "驾驶视角",
              "iconCls": "icon-jiashi icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1057,11)",
              "text": "地面视点",
              "iconCls": "icon-dimain icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        }
      ]
    },
    {
      "title": "视图",
      "groups": [
        {
          "title": "基本操作",
          "tools": [
            {
              "name": "zoomIn()",
              "text": "放大",
              "iconCls": "icon-zoomIn icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "zoomOut()",
              "text": "缩小",
              "iconCls": "icon-zoomOut icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "FullImage()",
              "text": "全图",
              "iconCls": "icon-all icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "zoomIn2DMap()",
              "text": "鹰眼",
              "iconCls": "icon-Eye icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "控件",
          "tools": [
            {
              "name": "NavigationCtl",
              "text": "导航控件",
              "iconCls": "icon-kongjian icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "CenterSign",
              "text": "中心十字",
              "iconCls": "icon-shizi icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "StatusBar",
              "text": "状态栏",
              "iconCls": "icon-zhuangtai icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "ScaleBar",
              "text": "比例尺",
              "iconCls": "icon-bili icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "GraphicHUD",
              "text": "图形HUD",
              "iconCls": "icon-hud icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        }
      ]
    },
    {
      "title": "对象",
      "groups": [
        {
          "title": "标签",
          "tools": [
            {
              "name": "execute(1012,0)",
              "text": "文本",
              "iconCls": "icon-wenben icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1012,1)",
              "text": "图片",
              "iconCls": "icon-tupian icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "2D对象",
          "tools": [
            {
              "name": "execute(1012,4)",
              "text": "折线",
              "iconCls": "icon-zhexian icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1012,5)",
              "text": "多边形",
              "iconCls": "icon-duobianxing icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1012,6)",
              "text": "矩形",
              "iconCls": "icon-juxing icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1012,7)",
              "text": "正多边形",
              "iconCls": "icon-zhengduobian icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1012,9)",
              "text": "圆形",
              "iconCls": "icon-yuan icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1012,10)",
              "text": "椭圆",
              "iconCls": "icon-tuoyuan icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1012,11)",
              "text": "弧形",
              "iconCls": "icon-hu icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1012,8)",
              "text": "2D箭头",
              "iconCls": "icon-jiantou icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "3D对象",
          "tools": [
            {
              "name": "execute(1012,13)",
              "text": "三维模型",
              "iconCls": "icon-sanweimoxing icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1012,14)",
              "text": "建筑物",
              "iconCls": "icon-object icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1012,21)",
              "text": "球体",
              "iconCls": "icon-qiu icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1012,24)",
              "text": "三维箭头",
              "iconCls": "icon-sanweijiantou icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1012,20)",
              "text": "圆柱体",
              "iconCls": "icon-yuanzhu icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "动态对象",
          "tools": [
            {
              "name": "execute(1012,26)",
              "text": "地面对象",
              "iconCls": "icon-dimian icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1012,27)",
              "text": "空中对象",
              "iconCls": "icon-kongzhong icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        }
      ]
    },
    {
      "title": "图层编辑",
      "groups": [
        {
          "title": "图层",
          "tools": [
            {
              "name": "execute(1022,0)",
              "text": "图层属性",
              "iconCls": "icon-attribute icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1086,0)",
              "text": "属性表",
              "iconCls": "icon-shuxingbiao icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "选择",
          "tools": [
            {
              "name": "selectLayerF",
              "text": "选择",
              "iconCls": "icon-choose icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "aeraSelectF",
              "text": "区域选择",
              "iconCls": "icon-area icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "lineSelect",
              "text": "画线选择",
              "iconCls": "icon-line icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "pointSelect",
              "text": "画点选择",
              "iconCls": "icon-huapoint icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "ObjSelect",
              "text": "对象选择",
              "iconCls": "icon-objectC icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        }
      ]
    },
    {
      "title": "演示汇报",
      "groups": [
        {
          "title": "演示工具",
          "tools": [
            {
              "name": "createPresentation()",
              "text": "新建演示",
              "iconCls": "icon-chuangjianyanshi icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "兴趣点",
          "tools": [
            {
              "name": "Presentation(1099,0)",
              "text": "加兴趣点",
              "iconCls": "icon-jiaxingqudian icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "Presentation(1101,0,this)",
              "text": "记录轨迹",
              "iconCls": "icon-jiluguiji icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "操作",
          "tools": [
            {
              "name": "Presentation(1102,0)",
              "text": "添加标题",
              "iconCls": "icon-tianjiabiaoti icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "Presentation(1111,0)",
              "text": "编辑工具",
              "iconCls": "icon-bianjigongju icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "播放漫游路线",
          "tools": [
            {
              "name": "Presentation(1112,0)",
              "text": "播放",
              "iconCls": "icon-bofang icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "type": "toolbar",
              "dir": "v",
              "tools": [
                {
                  "type": "label",
                  "text": "<a>运行算法&nbsp;&nbsp;</a><select id=\"algorithm\"><option>飞行到</option><option>曲线</option></select>"
                },
                {
                  "type": "label",
                  "text": "<a>运行模式&nbsp;&nbsp;</a><select id=\"flyMode\"><option>标准</option><option>自动播放</option></select>"
                },
                {
                  "type": "label",
                  "text": "<a>运行速度&nbsp;&nbsp;</a><select id=\"PlaySpeed\"><option>非常慢</option><option>慢行</option><option selected=\"selected\">常规</option><option>快速</option><option>非常快</option></select>"
                }
              ]
            }
          ]
        },
        {
          "title": "播放漫游路线",
          "tools": [
            {
              "name": "Presentation(1116,0)",
              "text": "创建视频",
              "iconCls": "icon-chuangjianshipin1 icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "type": "toolbar",
              "dir": "v",
              "tools": [
                {
                  "type": "label",
                  "text": "<a>帧数&nbsp;&nbsp;</a><input id=\"Frames\" value=\"25\" type=\"text\">"
                },
                {
                  "type": "label",
                  "text": "<a>尺寸&nbsp;&nbsp;</a><select id=\"FrameSize\"><option>当前尺寸</option><option>320*200</option><option>320*240</option><option>384*288</option><option>640*480</option><option>768*576</option><option>720*480</option><option>1280*720</option><option>1920*1080</option></select>"
                },
                {
                  "type": "label",
                  "text": "<input id=\"BestQuality\" checked=\"checked\" type=\"checkbox\">&nbsp;&nbsp;&nbsp;<a>最佳质量</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "工具",
      "groups": [
        {
          "title": "实用工具",
          "tools": [
            {
              "name": "execute(1067,0)",
              "text": "地图截图",
              "iconCls": "icon-ditijietu icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "excavation()",
              "text": "地形开挖",
              "iconCls": "icon-dixingkaiwa icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "查看对象",
          "tools": [
            {
              "name": "showAllObj()",
              "text": "全部显示",
              "iconCls": "icon-xianshiquanbu icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "hiddenAllObj()",
              "text": "全部隐藏",
              "iconCls": "icon-yinchangquanbu icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "showPipeline()",
              "text": "只看管线",
              "iconCls": "icon-zhikan icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "标注",
          "tools": [
            {
              "name": "heightLabel",
              "text": "高度标注",
              "iconCls": "icon-choose icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "coordLabel",
              "text": "坐标标注",
              "iconCls": "icon-area icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "SlopeLable",
              "text": "坡度标注",
              "iconCls": "icon-objectC icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "clearLabel()",
              "text": "清除标注",
              "iconCls": "icon-close icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        }
      ]
    }
  ]
}