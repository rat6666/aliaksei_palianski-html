import { taskPosition } from "../config/config.js";

export class HeaderRenderer {
  renderHeader(tasksInProgressCount, doneTasksCount, rootNode) {
    const markUp = `
    <div class="header">
      <p>MYTODO</p>
      <p>To Do: ${tasksInProgressCount} Items Done: ${doneTasksCount} Items</p>
    </div>
    `;
    rootNode.insertAdjacentHTML(taskPosition.afterBegin, markUp);
  }
}
