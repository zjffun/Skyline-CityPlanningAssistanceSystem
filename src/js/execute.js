export default function(Code, Parameter) {
  console.log('exec', Code, Parameter)
  if (Code == 'zoomIn()') {
    SGWorld.Navigate.ZoomIn();
    return
  }
  if (Code == 'zoomOut()') {
    SGWorld.Navigate.ZoomOut();
    return
  }
  if (Code == 'FullImage()') {
    var id = SGWorld.ProjectTree.FindItem("全图");
    SGWorld.Navigate.FlyTo(id,0);
    return
  }
  if (Code == 'zoomIn2DMap()') {
    alert('正在开发')
    return
  }
  if (SGWorld.Command.CanExecute(Code, Parameter) == false) {
    alert("此工具当前不可用");
  } else {
    SGWorld.Command.Execute(Code, Parameter);
  }
}