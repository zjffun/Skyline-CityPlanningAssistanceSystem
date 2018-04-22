import execute from './execute'
export default function(name, target){
  if (name == 'cpas-menu') return
  var $SR = window.$SR
  var btn = $SR.btns[name]
  var selected = $(target).hasClass('l-btn-selected')
  var disabled = $(target).hasClass('l-btn-disabled')
  console.log('btn_info', btn, selected, disabled)
  if (disabled) return
  switch(btn.btn_type){
    case 'imm':
      execute(btn.exec.code, btn.exec.para)
      break
    case 'toggle':
      if(!selected){
        $(target).addClass('l-btn-selected')
      }else{
        $(target).removeClass('l-btn-selected')
      }
      execute(btn.exec.code, btn.exec.para)
      break
      toggle_group_round
    case 'toggle_group_work_area':
      if(!selected){
        $SR.find("[group='work_area']").removeClass('l-btn-selected')
        $(target).addClass('l-btn-selected')
      }else{
        $(target).removeClass('l-btn-selected')
      }
      execute(btn.exec.code, btn.exec.para)
      break
    case 'toggle_group_round':
      if(!selected){
        $SR.find("[group='round']").removeClass('l-btn-selected')
        $(target).addClass('l-btn-selected')
      }else{
        $(target).removeClass('l-btn-selected')
      }
      execute(btn.exec.code, btn.exec.para)
      break
    default:
      if (btn.btn_type.substr(0, 13) == 'toggle_group_') {
        if(!selected){
          $SR.find("[group='" + btn.btn_type.substr(13) + "']").removeClass('l-btn-selected')
          $(target).addClass('l-btn-selected')
        }else{
          return
        }
        execute(btn.exec.code, btn.exec.para)
      }
      break
  }
}