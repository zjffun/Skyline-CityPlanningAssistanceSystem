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

  //演示工具
  if (Code == 'createPresentation()') {
    var itemId = SGWorld.ProjectTree.FindItem("演示工具");
    if (itemId == "") {
        itemId = SGWorld.ProjectTree.CreateGroup("演示工具");
    }
    var name = "演示工具#" + (Math.ceil(Math.random() * 100000));
    SGWorld.Creator.CreatePresentation(itemId, name);
    var Id = SGWorld.ProjectTree.FindItem("演示工具\\" + name);
    if (Id != "") {
        SGWorld.ProjectTree.SelectItem(Id);
    }
    return
  }

  if (SGWorld.Command.CanExecute(Code, Parameter) == false) {
    alert("此工具当前不可用");
  } else {
    SGWorld.Command.Execute(Code, Parameter);
  }
}