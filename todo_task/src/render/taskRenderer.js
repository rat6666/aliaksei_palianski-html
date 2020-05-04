import { taskPosition } from '../config/config.js';

export class TaskRenderer {
  renderTask(rootNode, task) {
    const markup = `
    <div class="todo-task ${task.id}">
      <input class="input-todo-${task.id}" disabled placeholder="${task.task}">
      <div class="button-block">
        <button class="button-done ${task.id}">Done</button>
        <button class="button-edit ${task.id}">Edit</button>
        <button class="button-delete ${task.id}">Delete</button>
      </div>
    </div>
    `;
    rootNode.insertAdjacentHTML(taskPosition.afterEnd, markup);
  }
}
