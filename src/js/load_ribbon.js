import ribbon_data from './ribbon_data'
import ribbon_btns from './ribbon_btn'
import ribbon_click from './ribbon_click'
export default function($skyline_ribbon){
  // 使用ribbon_data，ribbon_btns
  ribbon_data
  ribbon_btns
  console.log(ribbon_data,ribbon_btns)
  // 给jquery easyui拓展label
  $.fn.label = function(options){
    if (typeof options == 'object'){
      this.css($.extend({
        'float': 'left',
        'color': '#444',
        'padding': '1px',
        'text-decoration': 'none',
        'display': 'inline-block',
        'overflow': 'hidden',
        'margin': '0',
        'cursor': 'pointer',
        'outline': 'none',
        'text-align': 'center',
        'vertical-align': 'middle',
        'font-size': '12px',
        'line-height': '24px'
      }, options.css))
      this.append(options.text)
    }
  };
  
  ////////////////////////////////
  $.parser.plugins.push('label');
  var ribbon = $skyline_ribbon.ribbon({
    data: ribbon_data,
    onClick: function(name, target){
      console.log(name, target)
      ribbon_click(name, target)
    }
  }).tabs({
    onSelect: function(title, index){
      // 选择了tab（从0开始）
      switch(index){
        case 0:
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        default:
          break;
      }
    }
  });
  ribbon.btns = ribbon_btns
  return ribbon
}