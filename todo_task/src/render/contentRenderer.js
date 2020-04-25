export class ContentRenderer {
  constructor(taskRenderer) {
    this.taskRenderer = taskRenderer;
  }

  renderTaskInprogressSection(rootNode, task) {
    rootNode.insertAdjacentHTML(
      'afterbegin',
      `<div>
    <p class="ToDo section">ToDoList</p>
    </div>`
    );
    const taskNode = document.getElementsByClassName('ToDo section')[0];
    this.taskRenderer.renderTask(taskNode, task);
  }
}
