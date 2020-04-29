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
    task.forEach((element) => {
      if (element.done) {
        this.taskRenderer.renderTask(taskNode, element);
      }
    });
  }

  renderTaskDoneSection(rootNode, task) {
    rootNode.insertAdjacentHTML(
      'afterbegin',
      `<div>
      <p class="Done section">Done</p>
      </div>`
    );
    const taskNode = document.getElementsByClassName('Done section')[0];
    task.forEach((element) => {
      if (!element.done) {
        this.taskRenderer.renderTask(taskNode, element);
        document.getElementsByClassName(`button done ${element.id}`)[0].remove();
      }
    });
  }
}
