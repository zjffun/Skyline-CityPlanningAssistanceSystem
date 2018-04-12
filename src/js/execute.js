export default function(Code, Parameter, type, dom, other) {
  if (SGWorld.Command.CanExecute(Code, Parameter) == false) {
    alert("此工具当前不可用，请选择要素或图层！");
  } else {
    SGWorld.Command.Execute(Code, Parameter);
    switch (type) {
      // 
      case 'work_area':
        break;
      case 'status':
        break;
      case 'radio_status':
        break;
      case 'condition':
        break;
    }
  }
}