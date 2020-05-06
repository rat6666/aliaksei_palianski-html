import { section, taskPosition, button } from "../config/config.js";

export class ContentRenderer {
  constructor(taskRenderer) {
    this.taskRenderer = taskRenderer;
  }

  renderAddSection(rootNode) {
    const markUp = `
    <div class="${section.add}">
      <input class="input-add" placeholder="input new task">
      <button class="${button.add}">Add</button>
    </div>
    `;
    rootNode.insertAdjacentHTML(taskPosition.afterBegin, markUp);
  }

  renderTaskInprogressSection(rootNode, task) {
    const markUp = `
    <div>
      <p class="${section.done}">ToDoList</p>
    </div>
    `;
    rootNode.insertAdjacentHTML(taskPosition.afterBegin, markUp);
    const taskNode = document.getElementsByClassName(section.done)[0];
    task.forEach((element) => {
      if (!element.done) {
        this.taskRenderer.renderTask(taskNode, element);
      }
    });
  }

  renderTaskDoneSection(rootNode, task) {
    const markUp = `
    <div>
      <p class="${section.todo}">Done</p>
    </div>
    `;
    rootNode.insertAdjacentHTML(taskPosition.afterBegin, markUp);
    const taskNode = document.getElementsByClassName(section.todo)[0];
    task.forEach((element) => {
      if (element.done) {
        this.taskRenderer.renderTask(taskNode, element);
        document.getElementsByClassName(button.done)[0].remove();
      }
    });
  }
}
