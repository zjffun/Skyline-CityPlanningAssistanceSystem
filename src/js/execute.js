export default function(Code, Parameter) {
  if (SGWorld.Command.CanExecute(Code, Parameter) == false) {
    alert("此工具当前不可用");
  } else {
    SGWorld.Command.Execute(Code, Parameter);
  }
}