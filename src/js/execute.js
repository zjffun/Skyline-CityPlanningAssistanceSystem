export default function(Code, Parameter) {
  console.log('exec', Code, Parameter, SGWorld.Command.CanExecute(Code, Parameter))
  if (SGWorld.Command.CanExecute(Code, Parameter) == false) {
    alert("此工具当前不可用");
  } else {
    SGWorld.Command.Execute(Code, Parameter);
  }
}