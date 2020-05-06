import { taskPosition } from "../config/config.js";

export class TaskRenderer {
  renderTask(rootNode, task) {
    const markup = `
    <div class="todo-task" data-id="${task.id}">
      <input class="input-todo" disabled placeholder="${task.task}" data-id="${task.id}">
      <div class="button-block">
        <button class="button-done" data-id="${task.id}">Done</button>
        <button class="button-edit" data-id="${task.id}">Edit</button>
        <button class="button-delete" data-id="${task.id}">Delete</button>
      </div>
    </div>
    `;
    rootNode.insertAdjacentHTML(taskPosition.afterEnd, markup);
  }
}
