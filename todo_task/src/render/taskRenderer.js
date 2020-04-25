export class TaskRenderer {
  renderTask(rootNode, task) {
    rootNode.insertAdjacentHTML('afterend', `<div-${task}>Rest</div>`);
  }
}
