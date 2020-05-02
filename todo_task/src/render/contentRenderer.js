export class ContentRenderer {
  constructor(taskRenderer) {
    this.taskRenderer = taskRenderer;
    this.section = {
      add: 'add-section',
      done: 'done-section',
      todo: 'todo-section',
    };
    this.taskPosition = {
      afterBegin: 'afterbegin',
    };
  }

  renderAddSection(rootNode) {
    const markUp = `
    <div class="${this.section.add}">
      <input class="input-add" placeholder="input new task">
      <button class="button-add">Add</button>
    </div>
    `;
    rootNode.insertAdjacentHTML(this.taskPosition.afterBegin, markUp);
  }

  renderTaskInprogressSection(rootNode, task) {
    const markUp = `
    <div>
      <p class="${this.section.done}">ToDoList</p>
    </div>
    `;
    rootNode.insertAdjacentHTML(this.taskPosition.afterBegin, markUp);
    const taskNode = document.getElementsByClassName(this.section.done)[0];
    task.forEach((element) => {
      if (!element.done) {
        this.taskRenderer.renderTask(taskNode, element);
      }
    });
  }

  renderTaskDoneSection(rootNode, task) {
    const markUp = `
    <div>
      <p class="${this.section.todo}">Done</p>
    </div>
    `;
    rootNode.insertAdjacentHTML(this.taskPosition.afterBegin, markUp);
    const taskNode = document.getElementsByClassName(this.section.todo)[0];
    task.forEach((element) => {
      if (element.done) {
        this.taskRenderer.renderTask(taskNode, element);
        document.getElementsByClassName(`button-done ${element.id}`)[0].remove();
      }
    });
  }
}
