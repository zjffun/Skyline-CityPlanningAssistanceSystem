export default function(btn) {
  console.log('exec', btn)
  if ($.isFunction(btn.exec)) {
    btn.exec()
    return
  }
  
  var Code = btn.exec.code
  var Parameter = btn.exec.para
  if (SGWorld.Command.CanExecute(Code, Parameter) == false) {
    alert("此工具当前不可用");
  } else {
    SGWorld.Command.Execute(Code, Parameter);
  }
}