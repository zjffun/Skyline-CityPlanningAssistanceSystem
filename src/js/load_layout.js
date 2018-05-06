export default function($skyline_layout, request){
  $skyline_layout.layout()
  var conf = {title: request.r + '-' + request.u}
  if ($.inArray(request.r, ['管理员','环保','林业','发改委']) === -1) {
    conf.height = 1
    conf.split = false
  }
  // 修改完要重新生成一下
  $skyline_layout.layout('panel', 'north').panel(conf)
  $skyline_layout.layout()
  return $skyline_layout
}