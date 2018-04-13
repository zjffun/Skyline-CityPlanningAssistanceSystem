import execute from './execute'
export default function(name, target){
  var $SR = window.$SR
  var btn = $SR.btns[name]
  var type = btn.btn_type
  var selected = $(target).hasClass('l-btn-selected')
  var disabled = $(target).hasClass('l-btn-disabled')
  console.log(btn, selected, disabled)
  if (disabled) return
  switch(type){
    case 'imm':
      execute(btn.code, btn.para)
      break
    case 'toggle':
      if(!selected){
        $(target).addClass('l-btn-selected')
      }else{
        $(target).removeClass('l-btn-selected')
      }
      execute(btn.code, btn.para)
      break
    case 'toggle_group_work_area':
      if(!selected){
        $SR.find("[group='work_area']").removeClass('l-btn-selected')
        $(target).addClass('l-btn-selected')
      }else{
        $(target).removeClass('l-btn-selected')
      }
      execute(btn.code, btn.para)
      break
    default:
      if (type.substr(0, 13) == 'toggle_group_') {
        if(!selected){
          $SR.find("[group='" + type.substr(13) + "']").removeClass('l-btn-selected')
          $(target).addClass('l-btn-selected')
        }else{
          return
        }
        execute(btn.code, btn.para)
      }
      break
  }
}