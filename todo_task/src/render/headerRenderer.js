export class HeaderRenderer {
  renderHeader(tasksInProgressCount, doneTasksCount, rootNode) {
    rootNode.insertAdjacentHTML(
      'afterbegin',
      `<div class="header">
         <p>MYTODO</p>
         <p>To Do: ${tasksInProgressCount} Items Done: ${doneTasksCount} Items</p>
       </div>`
    );
  }
}
