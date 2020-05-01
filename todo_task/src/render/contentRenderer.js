export class ContentRenderer {
  constructor(taskRenderer) {
    this.taskRenderer = taskRenderer;
    this.section = {
      add: 'add-section',
      done: 'Done section',
      todo: 'ToDo section',
    };
  }

  renderAddSection(rootNode) {
    rootNode.insertAdjacentHTML(
      'afterbegin',
      `<div class="${this.section.add}">
    <input class="input-add" placeholder="input new task">
    <button class="button add">Add</button>
    </div>
    `
    );
  }

  renderTaskInprogressSection(rootNode, task) {
    rootNode.insertAdjacentHTML(
      'afterbegin',
      `<div>
          <p class="${this.section.done}">ToDoList</p>
       </div>`
    );
    const taskNode = document.getElementsByClassName(this.section.done)[0];
    task.forEach((element) => {
      if (!element.done) {
        this.taskRenderer.renderTask(taskNode, element);
      }
    });
  }

  renderTaskDoneSection(rootNode, task) {
    rootNode.insertAdjacentHTML(
      'afterbegin',
      `<div>
        <p class="${this.section.todo}">Done</p>
      </div>`
    );
    const taskNode = document.getElementsByClassName(this.section.todo)[0];
    task.forEach((element) => {
      if (element.done) {
        this.taskRenderer.renderTask(taskNode, element);
        document.getElementsByClassName(`button done ${element.id}`)[0].remove();
      }
    });
  }
}
