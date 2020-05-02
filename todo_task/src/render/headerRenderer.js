export class HeaderRenderer {
  constructor() {
    this.taskPosition = {
      afterBegin: 'afterbegin',
    };
  }

  renderHeader(tasksInProgressCount, doneTasksCount, rootNode) {
    const markUp = `
    <div class="header">
      <p>MYTODO</p>
      <p>To Do: ${tasksInProgressCount} Items Done: ${doneTasksCount} Items</p>
    </div>
    `;
    rootNode.insertAdjacentHTML(this.taskPosition.afterBegin, markUp);
  }
}
