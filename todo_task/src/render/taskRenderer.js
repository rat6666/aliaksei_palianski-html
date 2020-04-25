export class TaskRenderer {
  renderTask(rootNode, task) {
    const markup = `<div class="todo-${task.id}">
    <input class="input-todo-${task.id}" disabled placeholder="${task.task}">
    <button class="button-todo-done-${task.id}">Done</button>
    <button class="button-todo-edit-${task.id}">Edit</button>
    <button class="button-todo-delete-${task.id}">Delete</button>
    </div>
    `;
    rootNode.insertAdjacentHTML('afterend', markup);
  }
}
